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
exports.updateBooking = exports.getAllBookings = exports.getBookingById = exports.createBooking = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const createBooking = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield client_1.default.booking.create({
        data,
    });
    return booking;
});
exports.createBooking = createBooking;
const getBookingById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield client_1.default.booking.findUnique({
        where: { id },
    });
    if (!booking) {
        throw new Error('Booking not found');
    }
    return booking;
});
exports.getBookingById = getBookingById;
const getAllBookings = () => __awaiter(void 0, void 0, void 0, function* () {
    const bookings = yield client_1.default.booking.findMany();
    return bookings;
});
exports.getAllBookings = getAllBookings;
const updateBooking = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const booking = yield client_1.default.booking.update({
        where: { id },
        data,
    });
    return booking;
});
exports.updateBooking = updateBooking;
