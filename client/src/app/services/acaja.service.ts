import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { AperturaCaja } from '../models/ACaja';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ACajaService {

  API_URI = 'http://localhost:3000/api'
  constructor(private http:HttpClient) {  
  }
  //Metodos
  getAperturasCajas()
  {
    return this.http.get(`${this.API_URI}/aperturasCajas`)
  }
  getAperturaCaja(id: string){
    //${id} interpolación de cadenas
    return this.http.get(`${this.API_URI}/aperturasCajas/${id}`);
  }

  saveAperturaCaja(aperturaCaja: AperturaCaja){
    return this.http.post(`${this.API_URI}/aperturasCajas`, aperturaCaja);
  }

  deleteAperturaCaja(id:string){
    return this.http.delete(`${this.API_URI}/aperturasCajas/${id}`);
  }

  updateAperturaCaja(id: string, aperturaCaja:AperturaCaja):Observable<AperturaCaja>{
    return this.http.put(`${this.API_URI}/aperturasCajas/${id}`, aperturaCaja)
  }
}
