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
exports.activateAccount = exports.login = exports.register = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const emailService_1 = __importDefault(require("../utils/emailService"));
const jwtUtils_1 = require("../utils/jwtUtils");
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const register = (email, password, name) => __awaiter(void 0, void 0, void 0, function* () {
    const existingUser = yield client_1.default.user.findUnique({ where: { email } });
    if (existingUser) {
        throw new Error('Email already in use');
    }
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    const activationCode = generateActivationCode();
    const activationExpires = new Date(Date.now() + 300000); // 5 minutes from now
    const user = yield client_1.default.user.create({
        data: {
            id: (0, uuid_1.v4)(),
            email,
            password: hashedPassword,
            name,
            activationCode,
            activationExpires,
        },
    });
    console.log('User:', user);
    // console.log('Activation code:', activationCode);
    const templatePath = path_1.default.join(__dirname, '../mails/activation-mail.ejs');
    const data = {
        user,
        activationCode,
    };
    yield (0, emailService_1.default)({
        email: user.email,
        subject: 'Account Activation - Xplora',
        template: templatePath,
        data,
    });
    return user;
});
exports.register = register;
const generateActivationCode = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
};
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (!email || !password) {
        throw new Error('Email and password are required');
    }
    const user = yield client_1.default.user.findUnique({ where: { email } });
    if (!user || !(yield bcryptjs_1.default.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }
    const token = (0, jwtUtils_1.generateToken)({ userId: user.id, isAdmin: user.role }, '1d');
    return { token, user };
});
exports.login = login;
const activateAccount = (email, activationCode) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield client_1.default.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('User not found');
    }
    if (user.isActive) {
        throw new Error('Account is already activated');
    }
    if (user.activationCode !== activationCode ||
        !user.activationExpires ||
        new Date() > user.activationExpires) {
        throw new Error('Invalid or expired activation code');
    }
    const updatedUser = yield client_1.default.user.update({
        where: { id: user.id },
        data: {
            isActive: true,
            activationCode: null,
            activationExpires: null,
        },
    });
    return updatedUser;
});
exports.activateAccount = activateAccount;
