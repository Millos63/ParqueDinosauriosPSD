import { Component, OnInit, HostBinding} from '@angular/core';
import { ACajaService } from 'src/app/services/acaja.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-acaja-list',
  templateUrl: './acaja-list.component.html',
  styleUrls: ['./acaja-list.component.css']
})
export class AcajaListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  aperturasCajas: any = [];

  constructor (private aCajaService: ACajaService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.aCajaService.getAperturasCajas().subscribe(
      res => this.aperturasCajas = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.aCajaService.deleteAperturaCaja(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}
