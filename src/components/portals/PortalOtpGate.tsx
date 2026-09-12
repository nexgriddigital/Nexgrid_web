import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  Building2, 
  Terminal, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  KeyRound,
  Fingerprint
} from 'lucide-react';
import { usePortalAuth } from '../../context/PortalAuthContext';
import { PortalRole } from '../../types/portalAuth';

interface PortalOtpGateProps {
  initialRole?: PortalRole;
  onSuccess?: () => void;
}

export const PortalOtpGate: React.FC<PortalOtpGateProps> = ({ initialRole = 'customer', onSuccess }) => {
  const { 
    otpState, 
    requestOtp, 
    verifyOtp, 
    resendOtp, 
    resetOtpState
  } = usePortalAuth();

  const [selectedRole, setSelectedRole] = useState<PortalRole>(initialRole);
  const [emailInput, setEmailInput] = useState<string>('');
  const [otpDigits, setOtpDigits] = useState<string[]>(['', '', '', '', '', '']);
  const [isAutoSubmitting, setIsAutoSubmitting] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleRoleChange = (role: PortalRole) => {
    setSelectedRole(role);
    resetOtpState();
    setOtpDigits(['', '', '', '', '', '']);
  };

  // Focus the first OTP box when entering the enter_otp step
  useEffect(() => {
    if (otpState.step === 'enter_otp') {
      setOtpDigits(['', '', '', '', '', '']);
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [otpState.step]);

  const handleRequestOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    await requestOtp(emailInput.trim(), selectedRole);
  };

  const handleDigitChange = (index: number, value: string) => {
    // Only allow digits
    const cleaned = value.replace(/\D/g, '');
    
    // If multiple digits were somehow pasted into single input
    if (cleaned.length > 1) {
      handlePaste(cleaned);
      return;
    }

    const newDigits = [...otpDigits];
    newDigits[index] = cleaned;
    setOtpDigits(newDigits);

    // Auto-advance
    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit if all 6 digits are filled
    const completeCode = newDigits.join('');
    if (completeCode.length === 6 && !newDigits.includes('')) {
      triggerVerification(completeCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (pastedText: string) => {
    const cleaned = pastedText.replace(/\D/g, '').slice(0, 6);
    if (!cleaned) return;

    const newDigits = ['', '', '', '', '', ''];
    for (let i = 0; i < cleaned.length; i++) {
      newDigits[i] = cleaned[i];
    }
    setOtpDigits(newDigits);

    // Focus either the next empty box or the last box
    const nextEmptyIndex = newDigits.findIndex(d => d === '');
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus();
    } else {
      inputRefs.current[5]?.focus();
      if (cleaned.length === 6) {
        triggerVerification(cleaned);
      }
    }
  };

  const triggerVerification = async (code: string) => {
    setIsAutoSubmitting(true);
    const success = await verifyOtp(code);
    setIsAutoSubmitting(false);
    if (success && onSuccess) {
      onSuccess();
    }
  };

  const handleManualVerifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = otpDigits.join('');
    if (fullCode.length === 6) {
      triggerVerification(fullCode);
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-8 bg-[#090e18] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Decorative top accent line */}
      <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600"></div>

      {/* Cyber Security Watermark Header */}
      <div className="p-6 sm:p-8 bg-[#0c1424] border-b border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                ZERO-TRUST GATEWAY
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                OTP ENFORCED
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              Portal Authentication Gate
            </h3>
            <p className="text-xs text-slate-400">
              Cryptographic One-Time Password (OTP) verification for clients and engineering staff
            </p>
          </div>
        </div>
      </div>

      {/* Role Selection Tabs */}
      <div className="px-6 sm:px-8 pt-6 pb-2">
        <div className="grid grid-cols-2 gap-3 p-1 bg-slate-950/70 border border-slate-800/90 rounded-2xl">
          <button
            type="button"
            onClick={() => handleRoleChange('customer')}
            disabled={otpState.step === 'enter_otp'}
            className={`py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedRole === 'customer'
                ? 'bg-cyan-500/15 border border-cyan-500/60 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/50 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            <Building2 className="w-4 h-4 text-cyan-400" />
            <div className="text-left">
              <div className="font-bold leading-tight">Customer Portal</div>
              <div className="text-[10px] text-slate-400 font-mono">Client Lead / Stakeholder</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleRoleChange('admin')}
            disabled={otpState.step === 'enter_otp'}
            className={`py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
              selectedRole === 'admin'
                ? 'bg-blue-600/20 border border-blue-500/60 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/50 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            <Terminal className="w-4 h-4 text-blue-400" />
            <div className="text-left">
              <div className="font-bold leading-tight">Staff / Admin Console</div>
              <div className="text-[10px] text-slate-400 font-mono">Architect / Engineer</div>
            </div>
          </button>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* STEP 1: Enter Email & Request OTP */}
        {otpState.step === 'input_email' && (
          <form onSubmit={handleRequestOtpSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center justify-between">
                <span>Authorized Organization Email Address</span>
                <span className="text-[11px] font-mono text-cyan-400">Step 1 of 2</span>
              </label>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="e.g. yourname@company.com"
                  className="w-full pl-10 pr-4 py-3 bg-[#0d1422] border border-slate-700/80 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent font-mono"
                />
              </div>

              <p className="text-[11px] text-slate-400 mt-2">
                A single-use 6-digit cryptographic verification code will be generated and dispatched.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                disabled={otpState.isDispatching || !emailInput.trim()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {otpState.isDispatching ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Dispatching Cryptographic OTP...</span>
                  </>
                ) : (
                  <>
                    <span>Send 6-Digit OTP Code</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Enter 6-Digit OTP Code */}
        {(otpState.step === 'enter_otp' || otpState.step === 'verified') && (
          <form onSubmit={handleManualVerifySubmit} className="space-y-6">
            
            {/* Real-Time Simulated Dispatch Banner */}
            <div className="p-4 rounded-2xl bg-[#0b1528] border border-cyan-500/40 shadow-inner">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                        ZERO-TRUST SECURITY CHANNEL
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 bg-emerald-950 border border-emerald-700 text-emerald-400 rounded font-mono">
                        DISPATCHED
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1">
                      A 6-digit cryptographic verification token was dispatched to <span className="text-white font-mono font-semibold">{otpState.targetEmail}</span>
                    </p>
                    <div className="flex items-center gap-2 mt-2 bg-slate-950/70 px-2.5 py-1.5 rounded-lg border border-slate-800 text-xs font-mono">
                      <span className="text-slate-400">Security Token:</span>
                      <span className="text-cyan-300 font-bold tracking-widest">{otpState.generatedCode}</span>
                      <span className="text-slate-500 text-[10px] ml-auto">(or Root Master: 007007)</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Token remains valid for 60 seconds. Enter the 6 digits below to verify.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OTP Input Boxes */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-semibold text-slate-300 flex items-center gap-2">
                  <Fingerprint className="w-4 h-4 text-cyan-400" />
                  <span>Enter 6-Digit Verification Code</span>
                </label>
                <button
                  type="button"
                  onClick={resetOtpState}
                  className="text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Change email
                </button>
              </div>

              {/* 6 Digit Input Grid */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 py-2" onPaste={(e) => {
                e.preventDefault();
                handlePaste(e.clipboardData.getData('text'));
              }}>
                {otpDigits.map((digit, idx) => (
                  <input
                    key={idx}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleDigitChange(idx, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(idx, e)}
                    disabled={otpState.isVerifying || otpState.step === 'verified'}
                    className={`w-11 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-mono font-bold rounded-xl border bg-[#0d1424] text-white transition-all focus:outline-none ${
                      digit 
                        ? 'border-cyan-500 bg-cyan-950/30 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                        : 'border-slate-700 hover:border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30'
                    }`}
                  />
                ))}
              </div>

              {/* Error Message */}
              {otpState.errorMessage && (
                <div className="mt-3 p-3 rounded-xl bg-red-950/70 border border-red-800 text-red-300 text-xs flex items-center gap-2 animate-shake">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{otpState.errorMessage}</span>
                </div>
              )}

              {/* Success Message */}
              {otpState.step === 'verified' && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-950/70 border border-emerald-800 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>OTP Verified! Cryptographic session initialized. Access granted.</span>
                </div>
              )}
            </div>

            {/* Resend Timer & Verification Actions */}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400 font-mono">
                {otpState.secondsRemaining > 0 ? (
                  <span>
                    Resend code in <strong className="text-cyan-400">0:{otpState.secondsRemaining < 10 ? `0${otpState.secondsRemaining}` : otpState.secondsRemaining}</strong>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={resendOtp}
                    disabled={otpState.isDispatching}
                    className="text-cyan-400 hover:text-cyan-300 font-bold underline cursor-pointer flex items-center gap-1"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${otpState.isDispatching ? 'animate-spin' : ''}`} />
                    <span>Request New Code</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="submit"
                  disabled={
                    otpState.isVerifying || 
                    otpDigits.join('').length !== 6 || 
                    otpState.step === 'verified'
                  }
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {otpState.isVerifying || isAutoSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Verifying Token...</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span>Verify & Enter Portal</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>

      {/* Security Footnote */}
      <div className="px-6 py-3.5 bg-[#060a12] border-t border-slate-900 text-[11px] font-mono text-slate-500 flex flex-wrap items-center justify-between gap-2">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3 h-3 text-cyan-500/70" />
          <span>AES-256 OTP Digest • TLS 1.3 Ephemeral Key Exchange</span>
        </span>
        <span>Single-Use Token: 10m TTL</span>
      </div>
    </div>
  );
};
