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
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var grid_router_1 = require("./grid/grid.router");
var game_router_1 = require("./game/game.router");
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
// Path config and for Heroku to work too
app.use(express_1.default.static(path.join(__dirname, "client", "build")));
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/api/grid", grid_router_1.gridRouter);
app.use("/api/game", game_router_1.gameRouter);
// Handle `/` request — serve index
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
// All other GET requests not handled will either...
app.get("*", function (req, res) {
    if (req.path.includes("client")) {
        // return the client static files, or...
        res.sendFile(path.join(__dirname, "../", req.path));
    }
    else {
        // ...serve the React app
        res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
    }
});
/**
 * Server Activation
 */
app.listen(PORT, function () { return console.log("> Listening on port " + PORT); });
