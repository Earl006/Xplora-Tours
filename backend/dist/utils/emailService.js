"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const sendMail = (options) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Creating transport...');
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || '587'),
            secure: true, // true for port 465, false for other ports
            auth: {
                user: process.env.EMAIL_NAME,
                pass: process.env.EMAIL_PASSWORD
            },
            tls: {
                rejectUnauthorized: false
            },
            socketTimeout: 30000, // 30 seconds
            connectionTimeout: 30000 // 30 seconds
        });
        console.log('Transport created successfully');
        const { email, subject, template, data } = options;
        console.log('Rendering email template...');
        const html = yield ejs_1.default.renderFile(template, data);
        console.log('Email template rendered successfully');
        const mailOptions = {
            from: process.env.EMAIL_NAME,
            to: email,
            subject,
            html
        };
        console.log('Sending email to:', email);
        const result = yield transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', result);
    }
    catch (error) {
        console.error('Error sending email:', error.message || error);
        throw new Error('Failed to send email. Please try again later.');
    }
});
exports.default = sendMail;
