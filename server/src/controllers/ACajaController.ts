import { Request, Response } from "express";
import pool from "../database"

class ACajaController{
    public async index(req:Request, rest:Response){
        const aperturaCaja = await pool.query('SELECT * FROM aperturascajas')
        rest.json(aperturaCaja);
    }

    public async create(req:Request, rest:Response):Promise<void>{
        await pool.query('INSERT INTO aperturascajas SET ?', [req.body]);
        rest.json({Text: 'Datos de registro guardados'});
    }

    public async delete(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM aperturascajas WHERE folio = ?',[id]);
        rest.json({Text: 'Datos de registro borrados ' + id}); 
    }

    public async update(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE aperturascajas SET ? WHERE folio = ?', [req.body, id]);
        rest.json({Text: 'Datos actualizados' + id});
    }

    public async detail(req:Request, rest: Response):Promise<any>{
        const {id} = req.params;
        const aperturaCaja = await pool.query("SELECT * FROM aperturascajas WHERE folio = ?", [id]);
        if(aperturaCaja.length > 0){
            console.log(aperturaCaja[0]);
            return rest.json(aperturaCaja[0]);
        }
        else
        {
            rest.status(404).json({text: 'Registro no existe'});
        }
    }

}

export const aCajaController = new ACajaController();
export default aCajaController;