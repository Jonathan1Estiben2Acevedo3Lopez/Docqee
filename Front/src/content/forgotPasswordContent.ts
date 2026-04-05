import { ROUTES } from '@/constants/routes';

import type { ForgotPasswordContent } from './types';

export const forgotPasswordContent: ForgotPasswordContent = {
  blockedMessagePrefix: 'Demasiados intentos fallidos. Inténtalo nuevamente en',
  changePasswordLabel: 'Cambiar contraseña',
  changePasswordSubmittingLabel: 'Cambiando contraseña...',
  codeExpiredMessage: 'El código expiró. Solicita uno nuevo para continuar.',
  codeField: {
    invalidMessage: 'Ingresa un código válido de 6 dígitos.',
    label: 'Código de verificación',
    placeholder: '•',
    requiredMessage: 'Debes ingresar el código de 6 dígitos.',
  },
  codeInstructionsPrefix: 'Ingresa el código de seis dígitos enviado a',
  codeValidatedMessage: 'Código validado. Ya puedes definir una nueva contraseña.',
  cooldownMessage: 'Podrás solicitar un nuevo código en',
  description:
    'Ingresa tu correo para recibir un código de seguridad y definir una nueva contraseña.',
  emailField: {
    invalidMessage: 'Ingresa un correo electrónico válido',
    label: 'Correo electrónico',
    placeholder: 'nombre@correo.com',
    requiredMessage: 'El correo electrónico es obligatorio',
  },
  emailStepSuccessMessage:
    'Se procesó la solicitud y, si aplica, se envió un código de recuperación.',
  expiryMessagePrefix: 'El código vence en',
  invalidCodeMessage: 'El código ingresado no es correcto. Verifica e inténtalo nuevamente.',
  loginCta: {
    kind: 'internal',
    label: 'Volver al inicio de sesión',
    to: ROUTES.login,
  },
  meta: {
    description:
      'Recupera el acceso a tu cuenta de Docqee con un código temporal y una nueva contraseña.',
    title: 'Docqee | Recuperar contraseña',
  },
  password: {
    confirmLabel: 'Confirmar nueva contraseña',
    confirmMismatchMessage: 'La confirmación no coincide con la contraseña',
    confirmPlaceholder: 'Repite tu nueva contraseña',
    confirmRequiredMessage: 'Debes confirmar la nueva contraseña',
    hidePasswordLabel: 'Ocultar contraseña',
    label: 'Nueva contraseña',
    placeholder: 'Mínimo 8 caracteres',
    requiredMessage: 'La contraseña es obligatoria',
    requirements: [
      { key: 'minLength', label: 'Mínimo 8 caracteres.' },
      { key: 'uppercase', label: 'Mínimo una letra mayúscula.' },
      { key: 'lowercase', label: 'Mínimo una letra minúscula.' },
      { key: 'number', label: 'Mínimo un número.' },
      { key: 'special', label: 'Mínimo un carácter especial.' },
    ],
    requirementsMessage: 'La contraseña debe cumplir todos los requisitos',
    showPasswordLabel: 'Mostrar contraseña',
  },
  passwordResetUnexpectedMessage: 'No pudimos cambiar la contraseña. Inténtalo de nuevo.',
  resendCodeLabel: 'Reenviar código',
  resendCodeSubmittingLabel: 'Reenviando código...',
  sendCodeLabel: 'Enviar código',
  sendCodeSubmittingLabel: 'Enviando código...',
  sessionInvalidMessage:
    'La sesión de recuperación no es válida. Solicita un nuevo código para continuar.',
  successFlashMessage: 'Contraseña cambiada correctamente',
  title: 'Recuperar contraseña',
  tooManyAttemptsMessagePrefix:
    'Superaste el número de intentos permitidos. Inténtalo nuevamente en',
  unexpectedRequestMessage: 'No pudimos procesar la solicitud en este momento. Inténtalo de nuevo.',
  unexpectedVerificationMessage:
    'No pudimos validar el código en este momento. Inténtalo de nuevo.',
  verifyCodeLabel: 'Validar código',
  verifyCodeSubmittingLabel: 'Validando código...',
};
