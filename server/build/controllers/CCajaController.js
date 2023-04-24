"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cCajaController = void 0;
const database_1 = __importDefault(require("../database"));
class CCajaController {
    index(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const cierreCaja = yield database_1.default.query('SELECT * FROM cierrescajas');
            rest.json(cierreCaja);
        });
    }
    create(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cierrescajas SET ?', [req.body]);
            rest.json({ Text: 'Datos de registro guardados' });
        });
    }
    delete(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cierrescajas WHERE folio = ?', [id]);
            rest.json({ Text: 'Datos de registro borrados ' + id });
        });
    }
    update(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cierrescajas SET ? WHERE folio = ?', [req.body, id]);
            rest.json({ Text: 'Datos actualizados' + id });
        });
    }
    detail(req, rest) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cierreCaja = yield database_1.default.query("SELECT * FROM cierrescajas WHERE folio = ?", [id]);
            if (cierreCaja.length > 0) {
                console.log(cierreCaja[0]);
                return rest.json(cierreCaja[0]);
            }
            else {
                rest.status(404).json({ text: 'Registro no existe' });
            }
        });
    }
}
exports.cCajaController = new CCajaController();
exports.default = exports.cCajaController;
