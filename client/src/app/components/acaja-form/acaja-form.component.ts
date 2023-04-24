import { Component } from '@angular/core';
import { AperturaCaja } from 'src/app/models/ACaja';
import { ACajaService } from 'src/app/services/acaja.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acaja-form',
  templateUrl: './acaja-form.component.html',
  styleUrls: ['./acaja-form.component.css']
})
export class AcajaFormComponent {
  aperturaCaja: AperturaCaja = {
    folio: 0,
    idElaboradoPor: 0,
    idAprobadoPor: 0,
    idCaja: 0,
    fechaApertura: new Date(),
    montoApertura: 0.0,
    idCajero: 0,
    turno: "",
    observaciones: ""
  };

  selectedId: string = '';

  ngOnInit(): void {
    this.cargar();
  }
  constructor(private aCajaService: ACajaService,private activatedRoute:ActivatedRoute){

  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['folio'];
        if(id){
          this.aCajaService.getAperturaCaja(id).subscribe(
            es=>this.aperturaCaja=es,
            this.selectedId = id
          );
        }
      }
    )
  }
  update():void{
    this.aCajaService.updateAperturaCaja(this.selectedId,this.aperturaCaja).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewAperturaCaja(){
    delete this.aperturaCaja.folio;
    
    this.aCajaService.saveAperturaCaja(this.aperturaCaja).subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    );
  }
}
