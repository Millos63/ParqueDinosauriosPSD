import { Component } from '@angular/core';
import { CierreCaja } from 'src/app/models/CCaja';
import { CCajaService } from 'src/app/services/ccaja.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ccaja-form',
  templateUrl: './ccaja-form.component.html',
  styleUrls: ['./ccaja-form.component.css']
})
export class CCajaFormComponent {
  cierreCaja: CierreCaja = {
    folio: 0,
    idElaboradoPor: 0,
    idAprobadoPor: 0,
    idCaja: 0,
    fechaCierre: new Date(),
    corteDeCaja: 0.0,
    idCajero: 0,
    turno: "",
    observaciones: ""
  };

  selectedId: string = '';

  ngOnInit(): void {
    this.cargar();
  }
  constructor(private cCajaService: CCajaService,private activatedRoute:ActivatedRoute){

  }


  cargar():void{
    this.activatedRoute.params.subscribe(
      e=>{
        let id = e['folio'];
        if(id){
          this.cCajaService.getCierreCaja(id).subscribe(
            es=>this.cierreCaja=es,
            this.selectedId = id
          );
        }
      }
    )
  }
  update():void{
    this.cCajaService.updateCierreCaja(this.selectedId,this.cierreCaja).subscribe(
      res => {console.log(res)},
      err => console.error(err)
    );
  }

  saveNewAperturaCaja(){
    delete this.cierreCaja.folio;
    
    this.cCajaService.saveCierreCaja(this.cierreCaja).subscribe(
      res =>{console.log(res)},
      err => console.error(err)
    );
  }
}
