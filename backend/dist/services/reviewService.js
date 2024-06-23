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
exports.updateReview = exports.getAllReviews = exports.getReviewById = exports.createReview = void 0;
const client_1 = __importDefault(require("../prisma/client"));
const createReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield client_1.default.review.create({
        data,
    });
    return review;
});
exports.createReview = createReview;
const getReviewById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield client_1.default.review.findUnique({
        where: { id },
    });
    if (!review) {
        throw new Error('Review not found');
    }
    return review;
});
exports.getReviewById = getReviewById;
const getAllReviews = () => __awaiter(void 0, void 0, void 0, function* () {
    const reviews = yield client_1.default.review.findMany();
    return reviews;
});
exports.getAllReviews = getAllReviews;
const updateReview = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const review = yield client_1.default.review.update({
        where: { id },
        data,
    });
    return review;
});
exports.updateReview = updateReview;
