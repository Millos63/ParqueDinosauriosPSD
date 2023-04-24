import { Request, Response } from "express";
import pool from "../database"

class CCajaController{
    public async index(req:Request, rest:Response){
        const cierreCaja = await pool.query('SELECT * FROM cierrescajas')
        rest.json(cierreCaja);
    }

    public async create(req:Request, rest:Response):Promise<void>{
        await pool.query('INSERT INTO cierrescajas SET ?', [req.body]);
        rest.json({Text: 'Datos de registro guardados'});
    }

    public async delete(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('DELETE FROM cierrescajas WHERE folio = ?',[id]);
        rest.json({Text: 'Datos de registro borrados ' + id}); 
    }

    public async update(req:Request, rest:Response):Promise<void>{
        const {id} = req.params;
        await pool.query('UPDATE cierrescajas SET ? WHERE folio = ?', [req.body, id]);
        rest.json({Text: 'Datos actualizados' + id});
    }

    public async detail(req:Request, rest: Response):Promise<any>{
        const {id} = req.params;
        const cierreCaja = await pool.query("SELECT * FROM cierrescajas WHERE folio = ?", [id]);
        if(cierreCaja.length > 0){
            console.log(cierreCaja[0]);
            return rest.json(cierreCaja[0]);
        }
        else
        {
            rest.status(404).json({text: 'Registro no existe'});
        }
    }

}

export const cCajaController = new CCajaController();
export default cCajaController;