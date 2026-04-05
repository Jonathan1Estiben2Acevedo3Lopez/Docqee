import type {
  VerifyEmailResendInput,
  VerifyEmailResendResult,
  VerifyEmailService,
  VerifyEmailServiceInput,
  VerifyEmailVerificationResult,
} from '@/content/types';

export const PENDING_VERIFICATION_EMAIL_KEY = 'docqee.pending-verification-email';
export const VERIFY_EMAIL_COOLDOWN_UNTIL_KEY = 'docqee.verify-email-cooldown-until';
const DEFAULT_RESEND_COOLDOWN_SECONDS = 60;

function readSessionStorage() {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function persistPendingVerificationEmail(email: string) {
  const storage = readSessionStorage();

  if (!storage) {
    return;
  }

  storage.setItem(PENDING_VERIFICATION_EMAIL_KEY, email);
}

export function readPendingVerificationEmail() {
  const storage = readSessionStorage();

  if (!storage) {
    return null;
  }

  return storage.getItem(PENDING_VERIFICATION_EMAIL_KEY);
}

export function clearPendingVerificationEmail() {
  const storage = readSessionStorage();

  if (!storage) {
    return;
  }

  storage.removeItem(PENDING_VERIFICATION_EMAIL_KEY);
}

export function persistVerifyEmailCooldown(cooldownSeconds: number) {
  const storage = readSessionStorage();

  if (!storage) {
    return;
  }

  const expiresAt = Date.now() + cooldownSeconds * 1000;
  storage.setItem(VERIFY_EMAIL_COOLDOWN_UNTIL_KEY, String(expiresAt));
}

export function readVerifyEmailCooldownSeconds() {
  const storage = readSessionStorage();

  if (!storage) {
    return 0;
  }

  const rawExpiresAt = storage.getItem(VERIFY_EMAIL_COOLDOWN_UNTIL_KEY);

  if (!rawExpiresAt) {
    return 0;
  }

  const expiresAt = Number(rawExpiresAt);

  if (!Number.isFinite(expiresAt)) {
    storage.removeItem(VERIFY_EMAIL_COOLDOWN_UNTIL_KEY);
    return 0;
  }

  const remainingSeconds = Math.ceil((expiresAt - Date.now()) / 1000);

  if (remainingSeconds <= 0) {
    storage.removeItem(VERIFY_EMAIL_COOLDOWN_UNTIL_KEY);
    return 0;
  }

  return remainingSeconds;
}

export function clearVerifyEmailCooldown() {
  const storage = readSessionStorage();

  if (!storage) {
    return;
  }

  storage.removeItem(VERIFY_EMAIL_COOLDOWN_UNTIL_KEY);
}

function isSixDigitCode(value: string) {
  return /^\d{6}$/.test(value);
}

function verifyCode(input: VerifyEmailServiceInput): VerifyEmailVerificationResult {
  const email = input.email.trim();
  const code = input.code.trim();

  if (!email) {
    return {
      message: 'No encontramos el correo a verificar. Vuelve al registro para solicitar un código.',
      ok: false,
      reason: 'missing_email',
    };
  }

  if (!isSixDigitCode(code)) {
    return {
      message: 'Ingresa un código válido de 6 dígitos.',
      ok: false,
      reason: 'invalid_format',
    };
  }

  return { ok: true };
}

function resendCode(input: VerifyEmailResendInput): VerifyEmailResendResult {
  const email = input.email.trim();

  if (!email) {
    return {
      message: 'No encontramos el correo asociado para reenviar el código.',
      ok: false,
      reason: 'missing_email',
    };
  }

  return {
    cooldownSeconds: DEFAULT_RESEND_COOLDOWN_SECONDS,
    message: 'Preparamos el reenvío del código a tu correo.',
    ok: true,
  };
}

export const verifyEmailService: VerifyEmailService = {
  resendCode,
  verifyCode,
};
