import { registerAs } from '@nestjs/config';

export default registerAs('mail', () => ({
  from: process.env.MAIL_FROM ?? 'no-reply@docqee.com',
  resendApiKey: process.env.RESEND_API_KEY ?? '',
}));
