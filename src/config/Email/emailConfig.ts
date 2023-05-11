import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    // XOAuth2: {
    user: process.env.EMAIL_USERNAME,

    clientId: process.env.EMAIL_CLIENT_ID,
    clientSecret: process.env.EMAIL_CLIENT_SECRET,

    refreshToken: process.env.EMAIL_REFRESH_TOKEN,
    // accessUrl: 'https://accounts.google.com/o/oauth2/token',
    accessToken: process.env.EMAIL_PASSWORD,
    // }
  },
});

export default transporter;
