import {Router} from 'express';
import { aCajaController} from "../controllers/ACajaController";

class ACajaRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', aCajaController.index);
        this.router.post('/', aCajaController.create);
        this.router.delete('/:id', aCajaController.delete);
        this.router.put('/:id', aCajaController.update);
        this.router.get('/:id', aCajaController.detail);


    }
}
const aCajaRoutes = new ACajaRoutes();
export default aCajaRoutes.router;
