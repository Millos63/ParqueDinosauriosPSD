import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import { CCajaService } from 'src/app/services/ccaja.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ccaja-list',
  templateUrl: './ccaja-list.component.html',
  styleUrls: ['./ccaja-list.component.css']
})
export class CCajaListComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  cierresCajas: any = [];

  constructor (private cCajaService: CCajaService, private router:Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.cCajaService.getCierresCajas().subscribe(
      res => this.cierresCajas = res,
      err => console.error(err)
    );
  }

  delete(id:string){
    this.cCajaService.deleteCierreCaja(id).subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
      },
      err => console.error(err)
    );
  }
}
