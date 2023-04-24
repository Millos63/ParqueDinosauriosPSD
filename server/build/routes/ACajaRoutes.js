"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ACajaController_1 = require("../controllers/ACajaController");
class ACajaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ACajaController_1.aCajaController.index);
        this.router.post('/', ACajaController_1.aCajaController.create);
        this.router.delete('/:id', ACajaController_1.aCajaController.delete);
        this.router.put('/:id', ACajaController_1.aCajaController.update);
        this.router.get('/:id', ACajaController_1.aCajaController.detail);
    }
}
const aCajaRoutes = new ACajaRoutes();
exports.default = aCajaRoutes.router;
