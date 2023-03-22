"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// use to secure express server by setting various HTTP headers.
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({ origin: "*" }));
// use bodyParser to read json payloads
app.use(express_1.default.json());
// app.us(bodyParser.json())
// we are going to attach all the routes here with this server
exports.default = app;
