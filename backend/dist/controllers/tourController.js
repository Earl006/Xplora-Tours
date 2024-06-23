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
exports.deleteTour = exports.updateTour = exports.getTourById = exports.getAllTours = exports.createTour = void 0;
const tourService = __importStar(require("../services/tourService"));
const createTour = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { destination, duration, price, tourType } = req.body;
        const tour = yield tourService.createTour(destination, duration, price, tourType);
        res.status(201).json(tour);
    }
    catch (error) {
        next(error);
    }
});
exports.createTour = createTour;
const getAllTours = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tours = yield tourService.getAllTours();
        res.status(200).json(tours);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllTours = getAllTours;
const getTourById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tour = yield tourService.getTourById(id);
        res.status(200).json(tour);
    }
    catch (error) {
        next(error);
    }
});
exports.getTourById = getTourById;
const updateTour = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tour = yield tourService.updateTour(id, req.body);
        res.status(200).json(tour);
    }
    catch (error) {
        next(error);
    }
});
exports.updateTour = updateTour;
const deleteTour = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield tourService.deleteTour(id);
        res.status(204).send("Tour deleted successfully!");
    }
    catch (error) {
        next(error);
    }
});
exports.deleteTour = deleteTour;
