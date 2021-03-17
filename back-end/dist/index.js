"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var controller_hw_1 = __importDefault(require("./API/controller_hw"));
var TMDb_Routes_1 = __importDefault(require("./API/TMDb_Routes"));
var app = express_1.default();
var hw_msg = new controller_hw_1.default();
app.use(express_1.default.json());
app.use(cors_1.default({
    origin: "http://localhost:3333",
    methods: ['GET', 'PUT', 'POST'],
}));
app.use(TMDb_Routes_1.default);
app.get("/test", hw_msg.show_hs);
app.get("/", function (request, response) {
    return response.json({
        message: "MVP - Backend Commit Jr.",
        author: "Pablo Felipe"
    });
});
app.listen(3333);
