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
exports.deleteTour = exports.updateTour = exports.getTourById = exports.getAllTours = exports.createTour = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const uuid_1 = require("uuid");
const createTour = (destination, duration, price, tourType) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield client_1.default.tour.create({
        data: {
            id: (0, uuid_1.v4)(),
            destination,
            duration,
            price,
            tourType,
        },
    });
    return tour;
});
exports.createTour = createTour;
const getAllTours = () => __awaiter(void 0, void 0, void 0, function* () {
    const tours = yield client_1.default.tour.findMany({
        where: { isDeleted: false },
    });
    return tours;
});
exports.getAllTours = getAllTours;
const getTourById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield client_1.default.tour.findUnique({
        where: { id, isDeleted: false },
    });
    if (!tour)
        throw new Error('Tour not found');
    return tour;
});
exports.getTourById = getTourById;
const updateTour = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield client_1.default.tour.update({
        where: { id },
        data,
    });
    return tour;
});
exports.updateTour = updateTour;
const deleteTour = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const tour = yield client_1.default.tour.update({
        where: { id },
        data: { isDeleted: true },
    });
    return tour;
});
exports.deleteTour = deleteTour;
