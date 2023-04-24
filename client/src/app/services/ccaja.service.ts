import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CierreCaja } from '../models/CCaja';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CCajaService {
  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) {  
  }
  //Metodos
  getCierresCajas()
  {
    return this.http.get(`${this.API_URI}/cierresCajas`)
  }
  getCierreCaja(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/cierresCajas/${id}`);
  }

  saveCierreCaja(cierreCaja: CierreCaja){
    return this.http.post(`${this.API_URI}/cierresCajas`, cierreCaja);
  }

  deleteCierreCaja(id:string){
    return this.http.delete(`${this.API_URI}/cierresCajas/${id}`);
  }

  updateCierreCaja(id: string, cierreCaja:CierreCaja):Observable<CierreCaja>{
    return this.http.put(`${this.API_URI}/cierresCajas/${id}`, cierreCaja)
  }
}


