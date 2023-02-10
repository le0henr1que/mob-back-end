"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import { router } from "./routes";
const cors_1 = __importDefault(require("cors"));
// import { connectToMongoDb } from "./database/mongo";
// connectToMongoDb();
const app = (0, express_1.default)();
exports.app = app;
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
//# sourceMappingURL=app.js.map