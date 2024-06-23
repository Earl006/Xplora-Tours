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
exports.resetPassword = exports.updateUser = exports.getUserById = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        throw new Error('User ID is required');
    }
    const user = yield client_1.default.user.findUnique({
        where: { id },
    });
    if (!user) {
        throw new Error('User not found');
    }
    return user;
});
exports.getUserById = getUserById;
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield client_1.default.user.update({
            where: { id },
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
            },
        });
        return updatedUser;
    }
    catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
});
exports.updateUser = updateUser;
const resetPassword = (email, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield client_1.default.user.findUnique({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }
        const hashedPassword = yield bcryptjs_1.default.hash(newPassword, 10);
        return client_1.default.user.update({
            where: { id: user.id },
            data: { password: hashedPassword },
        });
    }
    catch (error) {
        console.error(`Error in resetPassword function: ${error.message}`);
        throw error;
    }
});
exports.resetPassword = resetPassword;
