import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { 
  Lock, 
  Mail, 
  KeyRound, 
  ArrowRight, 
  Building2, 
  Terminal, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle,
  Sparkles,
  Zap,
  ArrowLeft,
  Eye,
  EyeOff
} from 'lucide-react';
import { usePortalAuth } from '../context/PortalAuthContext';
import { PortalRole, DEMO_USERS } from '../types/portalAuth';
import { NexGridLogo } from '../components/NexGridLogo';

export const PortalSignInPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { 
    currentUser, 
    isAuthenticated, 
    requestOtp, 
    verifyOtp, 
    resendOtp, 
    otpState, 
    quickDemoLogin,
    loginWithPassword,
    resetOtpState
  } = usePortalAuth();

  const initialRoleParam = searchParams.get('role');
  const [selectedRole, setSelectedRole] = useState<PortalRole>(
    initialRoleParam === 'admin' ? 'admin' : 'customer'
  );

  const [authMethod, setAuthMethod] = useState<'otp' | 'password'>('password');
  const [emailInput, setEmailInput] = useState(DEMO_USERS[selectedRole].email);
  const [passwordInput, setPasswordInput] = useState('ApexSecure2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // If already authenticated with the selected role, offer instant access
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      if (currentUser.role === 'customer' && selectedRole === 'customer') {
        // Can redirect or user can proceed
      }
    }
  }, [isAuthenticated, currentUser, selectedRole]);

  // Sync role from query params
  useEffect(() => {
    const roleParam = searchParams.get('role');
    if (roleParam === 'admin' || roleParam === 'customer') {
      setSelectedRole(roleParam);
      setEmailInput(DEMO_USERS[roleParam].email);
      setPasswordInput(roleParam === 'admin' ? 'StaffRoot2026!' : 'ApexSecure2026!');
      resetOtpState();
      setErrorMessage(null);
    }
  }, [searchParams, resetOtpState]);

  const handleRoleChange = (role: PortalRole) => {
    setSelectedRole(role);
    setSearchParams({ role });
    setEmailInput(DEMO_USERS[role].email);
    setPasswordInput(role === 'admin' ? 'StaffRoot2026!' : 'ApexSecure2026!');
    resetOtpState();
    setErrorMessage(null);
  };

  // Password submission
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim() || !passwordInput.trim()) {
      setErrorMessage('Please enter your work email and password.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 650));
      await loginWithPassword(emailInput.trim(), selectedRole);
      
      if (selectedRole === 'customer') {
        navigate('/portal/customer');
      } else {
        navigate('/portal/staff');
      }
    } catch {
      setErrorMessage('Authentication failed. Please verify your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  // Request OTP submission
  const handleOtpRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) {
      setErrorMessage('Please provide a valid corporate email.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      await requestOtp(emailInput.trim(), selectedRole);
    } catch {
      setErrorMessage('Failed to dispatch verification code. Please retry.');
    } finally {
      setIsLoading(false);
    }
  };

  // Digit handling
  const handleDigitChange = (index: number, val: string) => {
    const clean = val.replace(/\D/g, '');
    const updated = [...otpDigits];
    updated[index] = clean.slice(0, 1);
    setOtpDigits(updated);

    if (clean && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }

    const fullCode = updated.join('');
    if (fullCode.length === 6 && !updated.includes('')) {
      handleVerifyOtp(fullCode);
    }
  };

  const handleVerifyOtp = async (codeToVerify?: string) => {
    const code = codeToVerify || otpDigits.join('');
    if (code.length !== 6) {
      setErrorMessage('Please enter all 6 digits of your verification code.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    const ok = await verifyOtp(code);
    setIsLoading(false);

    if (ok) {
      if (selectedRole === 'customer') {
        navigate('/portal/customer');
      } else {
        navigate('/portal/staff');
      }
    }
  };

  // Quick Demo Access Handler
  const handleQuickDemo = (role: PortalRole) => {
    quickDemoLogin(role);
    if (role === 'customer') {
      navigate('/portal/customer');
    } else {
      navigate('/portal/staff');
    }
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080b11] flex flex-col justify-center relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-md w-full mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Navigation back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/portals"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portals Overview</span>
          </Link>

          <span className="text-[11px] font-mono text-slate-400">
            Secure TLS 1.3 / mTLS
          </span>
        </div>

        {/* Card Container */}
        <div className="bg-[#0b111e] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-black/80">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <NexGridLogo variant="icon-only" size="md" />
            </div>
            
            <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
              Sign In to NexGrid
            </h1>
            <p className="text-xs text-slate-400">
              Access your segregated project deliverables, SLA tickets, and technical infrastructure.
            </p>
          </div>

          {/* Role Switcher Tabs */}
          <div className="grid grid-cols-2 p-1 bg-slate-900/90 rounded-2xl border border-slate-800 mb-6">
            <button
              type="button"
              onClick={() => handleRoleChange('customer')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                selectedRole === 'customer'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Customer Portal</span>
            </button>

            <button
              type="button"
              onClick={() => handleRoleChange('admin')}
              className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                selectedRole === 'admin'
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Staff & Ops</span>
            </button>
          </div>

          {/* Already Logged In Banner */}
          {isAuthenticated && currentUser && currentUser.role === selectedRole && (
            <div className="mb-6 p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">{currentUser.name}</div>
                <div className="text-[11px] text-cyan-300 font-mono">Already logged in as {currentUser.role}</div>
              </div>
              <button
                type="button"
                onClick={() => navigate(selectedRole === 'customer' ? '/portal/customer' : '/portal/staff')}
                className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Go to Dashboard</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Auth Method Selector */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-5 text-xs font-mono">
            <span className="text-slate-400">Authentication Mode:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setAuthMethod('password');
                  resetOtpState();
                }}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  authMethod === 'password'
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Password
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMethod('otp');
                  resetOtpState();
                }}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  authMethod === 'otp'
                    ? 'bg-slate-800 text-cyan-300 border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Zero-Trust OTP
              </button>
            </div>
          </div>

          {/* Error Message */}
          {(errorMessage || otpState.errorMessage) && (
            <div className="mb-5 p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/60 flex items-start gap-2 text-rose-300 text-xs">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{errorMessage || otpState.errorMessage}</span>
            </div>
          )}

          {/* Form: Password Method */}
          {authMethod === 'password' && (
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Corporate Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Password
                  </label>
                  <span className="text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer">
                    Forgot password?
                  </span>
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-400">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded bg-slate-900 border-slate-800 text-cyan-500 focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>Remember this workstation</span>
                </label>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>2FA Enforced</span>
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-2 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/10 cursor-pointer"
              >
                {isLoading ? (
                  <span>Authenticating TLS Token...</span>
                ) : (
                  <>
                    <span>Sign In to {selectedRole === 'customer' ? 'Customer Portal' : 'Staff Console'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {/* Form: Zero-Trust OTP Method */}
          {authMethod === 'otp' && (
            <div>
              {otpState.step !== 'enter_otp' ? (
                <form onSubmit={handleOtpRequest} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Enter Authorized Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="authorized.user@company.com"
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      A 6-digit cryptographic authentication token will be dispatched to this corporate inbox.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading || otpState.isDispatching}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    {otpState.isDispatching || isLoading ? (
                      <span>Dispatching Secure Token...</span>
                    ) : (
                      <>
                        <span>Send 6-Digit OTP Code</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs">
                    <div className="text-cyan-300 font-semibold mb-0.5">Code sent to:</div>
                    <div className="font-mono text-white text-[11px] truncate">{otpState.targetEmail}</div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      (Demo Code: <strong className="text-cyan-400 font-mono tracking-widest">{otpState.generatedCode}</strong>)
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2 text-center">
                      Enter 6-Digit Verification Code
                    </label>
                    <div className="flex justify-between gap-2">
                      {otpDigits.map((digit, idx) => (
                        <input
                          key={idx}
                          id={`otp-input-${idx}`}
                          type="text"
                          inputMode="numeric"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleDigitChange(idx, e.target.value)}
                          className="w-11 h-12 text-center text-lg font-mono font-bold bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                    <span>
                      {otpState.secondsRemaining > 0 
                        ? `Expires in ${otpState.secondsRemaining}s`
                        : 'Code expired'}
                    </span>
                    <button
                      type="button"
                      onClick={() => resendOtp()}
                      disabled={otpState.secondsRemaining > 40}
                      className="text-cyan-400 hover:text-cyan-300 disabled:opacity-40 cursor-pointer"
                    >
                      Resend Code
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleVerifyOtp()}
                    disabled={isLoading || otpDigits.join('').length !== 6}
                    className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Verify & Enter Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const code = otpState.generatedCode;
                      setOtpDigits(code.split(''));
                      handleVerifyOtp(code);
                    }}
                    className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-xs font-mono text-cyan-300 border border-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Auto-Fill Demo Code ({otpState.generatedCode})</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Quick Demo Credentials Shortcut */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 text-center">
              INSTANT PREVIEW & EVALUATION
            </div>
            
            <button
              type="button"
              onClick={() => handleQuickDemo(selectedRole)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center justify-between transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>1-Click Instant Demo Login:</span>
              </div>
              <strong className="text-white">
                {selectedRole === 'customer' ? 'Sarah (Client Lead)' : 'Alex (Staff Admin)'}
              </strong>
            </button>
          </div>

          {/* Bottom Link: Sign Up */}
          <div className="mt-6 text-center text-xs text-slate-400">
            {selectedRole === 'customer' ? (
              <p>
                New corporate client?{' '}
                <Link
                  to="/portal/signup"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 decoration-cyan-500/40"
                >
                  Register Client Account & Onboarding
                </Link>
              </p>
            ) : (
              <p className="text-slate-400 text-[11px]">
                Staff permissions are managed via Okta SSO and NexGrid Corporate IAM.
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
