import nodemailer from 'nodemailer';
import ditenv from "dotenv";
configDotenv.config();

const transporter=nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.EMAIL_USER,
        pass:process.env.EMAIL_PASS,
    },
});
export default transporter;