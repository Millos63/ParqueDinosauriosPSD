"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CCajaController_1 = require("../controllers/CCajaController");
class CCajaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CCajaController_1.cCajaController.index);
        this.router.post('/', CCajaController_1.cCajaController.create);
        this.router.delete('/:id', CCajaController_1.cCajaController.delete);
        this.router.put('/:id', CCajaController_1.cCajaController.update);
        this.router.get('/:id', CCajaController_1.cCajaController.detail);
    }
}
const cCajaRoutes = new CCajaRoutes();
exports.default = cCajaRoutes.router;
