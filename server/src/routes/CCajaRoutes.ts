import {Router} from 'express';
import { cCajaController} from "../controllers/CCajaController";

class CCajaRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', cCajaController.index);
        this.router.post('/', cCajaController.create);
        this.router.delete('/:id', cCajaController.delete);
        this.router.put('/:id', cCajaController.update);
        this.router.get('/:id', cCajaController.detail);


    }
}
const cCajaRoutes = new CCajaRoutes();
export default cCajaRoutes.router;
