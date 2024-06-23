"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReview = exports.getAllReviews = exports.getReviewById = exports.createReview = void 0;
const reviewService = __importStar(require("../services/reviewService"));
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield reviewService.createReview(req.body);
        res.status(201).json(review);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.createReview = createReview;
const getReviewById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield reviewService.getReviewById(req.params.id);
        res.status(200).json(review);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});
exports.getReviewById = getReviewById;
const getAllReviews = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield reviewService.getAllReviews();
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.getAllReviews = getAllReviews;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield reviewService.updateReview(req.params.id, req.body);
        res.status(200).json(review);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
exports.updateReview = updateReview;
