"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.show_hs = function (req, res) {
        return res.json({
            helloWord: "Hello Word",
            App: "NodeJs App"
        });
    };
    return HelloWorld;
}());
exports.default = HelloWorld;
