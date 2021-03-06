"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearGrid = exports.updateGrid = exports.updateGridSlot = exports.getGridSlot = exports.getGrid = void 0;
/**
 * In-Memory Store
 */
var initialValues = {
    1: {
        id: 1,
        occupant: null,
        winningSlot: false,
    },
    2: {
        id: 2,
        occupant: null,
        winningSlot: false,
    },
    3: {
        id: 3,
        occupant: null,
        winningSlot: false,
    },
    4: {
        id: 4,
        occupant: null,
        winningSlot: false,
    },
    5: {
        id: 5,
        occupant: null,
        winningSlot: false,
    },
    6: {
        id: 6,
        occupant: null,
        winningSlot: false,
    },
    7: {
        id: 7,
        occupant: null,
        winningSlot: false,
    },
    8: {
        id: 8,
        occupant: null,
        winningSlot: false,
    },
    9: {
        id: 9,
        occupant: null,
        winningSlot: false,
    },
};
var grid = __assign({}, initialValues);
/**
 * Service Methods
 */
var sortObject = function (object) {
    return Object.keys(object)
        .sort()
        .reduce(function (result, key) {
        result[parseInt(key)] = object[parseInt(key)];
        return result;
    }, {});
};
var getGrid = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        grid = sortObject(grid);
        return [2 /*return*/, Object.values(grid)];
    });
}); };
exports.getGrid = getGrid;
var getGridSlot = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var slot;
    return __generator(this, function (_a) {
        slot = grid[id];
        return [2 /*return*/, slot];
    });
}); };
exports.getGridSlot = getGridSlot;
var updateGridSlot = function (slot, newGridSlot) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedGridSlot;
    var _a;
    return __generator(this, function (_b) {
        if (!grid[slot]) {
            return [2 /*return*/, []];
        }
        updatedGridSlot = (_a = {}, _a[slot] = __assign(__assign({}, grid[slot]), newGridSlot), _a);
        grid = sortObject(__assign(__assign({}, grid), updatedGridSlot));
        return [2 /*return*/, Object.values(grid)];
    });
}); };
exports.updateGridSlot = updateGridSlot;
var updateGrid = function (newGrid) { return __awaiter(void 0, void 0, void 0, function () {
    var gridObject;
    return __generator(this, function (_a) {
        gridObject = {};
        newGrid.forEach(function (slot, index) {
            gridObject[index + 1] = __assign({}, slot);
        });
        grid = newGrid;
        return [2 /*return*/, Object.values(grid)];
    });
}); };
exports.updateGrid = updateGrid;
var clearGrid = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        grid = initialValues;
        return [2 /*return*/, Object.values(grid)];
    });
}); };
exports.clearGrid = clearGrid;
