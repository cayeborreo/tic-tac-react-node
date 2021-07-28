"use strict";
/**
 * Required External Modules
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var path = __importStar(require("path"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var grid_router_1 = require("./grid/grid.router");
// load the environment variables from the .env file
dotenv.config({
    path: ".env",
});
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10) || 3000;
var app = express_1.default();
/**
 *  App Configuration
 */
// Heroku config
// const buildPath = path.join(__dirname, "client", "build");
app.use(express_1.default.static(path.join(__dirname, "client", "build")));
app.use(express_1.default.static(path.join(__dirname, "client", "build", "static")));
app.use(helmet_1.default());
// app.use(cors());
app.use(express_1.default.json());
app.use("/api/grid", grid_router_1.gridRouter);
// app.use(express.static(path.resolve(__dirname, "../client/build/index.html")));
// app.use(express.static("client/public"));
// handle `/` request
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
});
// All other GET requests not handled before will return our React app
app.get("*", function (req, res) {
    // console.log(req);
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
/**
 * Server Activation
 */
app.listen(PORT, function () { return console.log("> Listening on port " + PORT); });
