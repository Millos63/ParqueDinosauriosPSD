import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcajaListComponent } from './components/acaja-list/acaja-list.component';
import { AcajaFormComponent } from './components/acaja-form/acaja-form.component';
import { CCajaListComponent } from './components/ccaja-list/ccaja-list.component';
import { CCajaFormComponent } from './components/ccaja-form/ccaja-form.component';

const routes: Routes = [
  //Rutas de aperturasCaja
  {path:'', redirectTo:'/aperturasCajas',pathMatch:'full'},
  {path: 'aperturasCajas', component: AcajaListComponent},
  {path: 'aperturasCajas/add', component: AcajaFormComponent}, 
  {path: 'aperturasCajas/add/:folio', component: AcajaFormComponent},

  //Rutas de cierresCajas
  {path:'', redirectTo:'/cierresCajas',pathMatch:'full'},
  {path: 'cierresCajas', component: CCajaListComponent},
  {path: 'cierresCajas/add', component: CCajaFormComponent}, 
  {path: 'cierresCajas/add/:folio', component: CCajaFormComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
