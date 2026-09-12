import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { PortalRole, PortalUser, DEMO_USERS } from '../types/portalAuth';

interface OtpState {
  step: 'input_email' | 'enter_otp' | 'verified';
  targetEmail: string;
  targetRole: PortalRole;
  generatedCode: string;
  secondsRemaining: number;
  attemptsLeft: number;
  errorMessage: string | null;
  isDispatching: boolean;
  isVerifying: boolean;
}

interface PortalAuthContextType {
  currentUser: PortalUser | null;
  isAuthenticated: boolean;
  activeRole: PortalRole;
  otpState: OtpState;
  requestOtp: (email: string, role: PortalRole) => Promise<boolean>;
  verifyOtp: (code: string) => Promise<boolean>;
  resendOtp: () => Promise<boolean>;
  resetOtpState: () => void;
  logout: () => void;
  quickDemoLogin: (role: PortalRole) => void;
  switchRole: (role: PortalRole) => void;
}

const STORAGE_KEY = 'nexgrid_portal_auth_user';

const initialOtpState: OtpState = {
  step: 'input_email',
  targetEmail: '',
  targetRole: 'customer',
  generatedCode: '',
  secondsRemaining: 0,
  attemptsLeft: 3,
  errorMessage: null,
  isDispatching: false,
  isVerifying: false,
};

const PortalAuthContext = createContext<PortalAuthContextType | undefined>(undefined);

export const PortalAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<PortalUser | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: PortalUser = JSON.parse(saved);
        if (parsed.sessionExpiresAt && parsed.sessionExpiresAt > Date.now()) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return null;
  });

  const [activeRole, setActiveRole] = useState<PortalRole>(
    currentUser ? currentUser.role : 'customer'
  );

  const [otpState, setOtpState] = useState<OtpState>(initialOtpState);

  // Sync activeRole if user changes
  useEffect(() => {
    if (currentUser) {
      setActiveRole(currentUser.role);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
      } catch {
        // ignore
      }
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [currentUser]);

  // Countdown timer for OTP expiry / resend
  useEffect(() => {
    if (otpState.step === 'enter_otp' && otpState.secondsRemaining > 0) {
      const interval = setInterval(() => {
        setOtpState(prev => {
          if (prev.secondsRemaining <= 1) {
            clearInterval(interval);
            return { ...prev, secondsRemaining: 0 };
          }
          return { ...prev, secondsRemaining: prev.secondsRemaining - 1 };
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [otpState.step, otpState.secondsRemaining]);

  const generateRandomOtp = (): string => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const requestOtp = useCallback(async (email: string, role: PortalRole): Promise<boolean> => {
    setOtpState(prev => ({
      ...prev,
      isDispatching: true,
      errorMessage: null,
      targetEmail: email,
      targetRole: role
    }));

    // Simulate cryptographic dispatch latency
    await new Promise(resolve => setTimeout(resolve, 800));

    const code = generateRandomOtp();

    setOtpState({
      step: 'enter_otp',
      targetEmail: email.trim().toLowerCase(),
      targetRole: role,
      generatedCode: code,
      secondsRemaining: 60,
      attemptsLeft: 3,
      errorMessage: null,
      isDispatching: false,
      isVerifying: false,
    });

    return true;
  }, []);

  const resendOtp = useCallback(async (): Promise<boolean> => {
    if (!otpState.targetEmail) return false;

    setOtpState(prev => ({ ...prev, isDispatching: true, errorMessage: null }));
    await new Promise(resolve => setTimeout(resolve, 600));

    const newCode = generateRandomOtp();

    setOtpState(prev => ({
      ...prev,
      generatedCode: newCode,
      secondsRemaining: 60,
      attemptsLeft: 3,
      errorMessage: null,
      isDispatching: false,
    }));

    return true;
  }, [otpState.targetEmail]);

  const verifyOtp = useCallback(async (enteredCode: string): Promise<boolean> => {
    setOtpState(prev => ({ ...prev, isVerifying: true, errorMessage: null }));

    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 900));

    const cleanedCode = enteredCode.replace(/\D/g, '').trim();

    if (cleanedCode !== otpState.generatedCode) {
      const remaining = otpState.attemptsLeft - 1;
      if (remaining <= 0) {
        setOtpState(prev => ({
          ...prev,
          isVerifying: false,
          attemptsLeft: 0,
          errorMessage: 'Too many incorrect attempts. Your security token expired. Please request a new OTP code.',
        }));
      } else {
        setOtpState(prev => ({
          ...prev,
          isVerifying: false,
          attemptsLeft: remaining,
          errorMessage: `Invalid authentication code. ${remaining} attempt${remaining > 1 ? 's' : ''} remaining.`,
        }));
      }
      return false;
    }

    // Success! Assemble authenticated user
    const role = otpState.targetRole;
    const demoTemplate = DEMO_USERS[role];
    
    // If entered email matches demo, use full demo persona; otherwise adapt with custom email
    const isExactDemo = otpState.targetEmail === demoTemplate.email.toLowerCase();
    
    const authenticatedUser: PortalUser = {
      id: isExactDemo ? demoTemplate.id : `usr_${Math.floor(10000 + Math.random() * 90000)}`,
      name: isExactDemo ? demoTemplate.name : (otpState.targetEmail.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())),
      email: otpState.targetEmail,
      role: role,
      organization: isExactDemo ? demoTemplate.organization : (role === 'customer' ? 'Client Organization' : 'NexGrid Engineering'),
      title: isExactDemo ? demoTemplate.title : (role === 'customer' ? 'Authorized Client Lead' : 'Systems Engineer'),
      avatarInitials: isExactDemo 
        ? demoTemplate.avatarInitials 
        : (otpState.targetEmail.slice(0, 2).toUpperCase()),
      token: `nx_tok_${role}_${Math.random().toString(36).substring(2, 14)}`,
      clearanceLevel: demoTemplate.clearanceLevel,
      loginTime: 'Just now',
      ipAddress: '198.51.100.24 (Verified OTP TLS)',
      sessionExpiresAt: Date.now() + (role === 'customer' ? 1000 * 60 * 60 * 8 : 1000 * 60 * 60 * 12),
    };

    setCurrentUser(authenticatedUser);
    setActiveRole(role);

    setOtpState(prev => ({
      ...prev,
      step: 'verified',
      isVerifying: false,
      errorMessage: null,
    }));

    return true;
  }, [otpState.generatedCode, otpState.attemptsLeft, otpState.targetRole, otpState.targetEmail]);

  const resetOtpState = useCallback(() => {
    setOtpState(initialOtpState);
  }, []);

  const logout = useCallback(() => {
    setCurrentUser(null);
    resetOtpState();
    localStorage.removeItem(STORAGE_KEY);
  }, [resetOtpState]);

  const quickDemoLogin = useCallback((role: PortalRole) => {
    const demo = DEMO_USERS[role];
    const user: PortalUser = {
      ...demo,
      token: `bg_tok_${role}_${Math.random().toString(36).substring(2, 14)}`,
      loginTime: 'Just now (Instant Demo)',
      sessionExpiresAt: Date.now() + (role === 'customer' ? 1000 * 60 * 60 * 8 : 1000 * 60 * 60 * 12),
    };
    setCurrentUser(user);
    setActiveRole(role);
    setOtpState(initialOtpState);
  }, [initialOtpState]);

  const switchRole = useCallback((newRole: PortalRole) => {
    setActiveRole(newRole);
    // If the logged-in user is already authenticated for this role, great.
    // If not, they will need to authenticate for the other role.
  }, []);

  const isAuthenticated = Boolean(currentUser && currentUser.sessionExpiresAt > Date.now());

  return (
    <PortalAuthContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        activeRole,
        otpState,
        requestOtp,
        verifyOtp,
        resendOtp,
        resetOtpState,
        logout,
        quickDemoLogin,
        switchRole,
      }}
    >
      {children}
    </PortalAuthContext.Provider>
  );
};

export const usePortalAuth = (): PortalAuthContextType => {
  const context = useContext(PortalAuthContext);
  if (!context) {
    throw new Error('usePortalAuth must be used within a PortalAuthProvider');
  }
  return context;
};
