import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AcajaFormComponent } from './components/acaja-form/acaja-form.component';
import { AcajaListComponent } from './components/acaja-list/acaja-list.component';
import { ACajaService } from './services/acaja.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CCajaFormComponent } from './components/ccaja-form/ccaja-form.component';
import { CCajaListComponent } from './components/ccaja-list/ccaja-list.component';
import { CCajaService } from './services/ccaja.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AcajaFormComponent,
    AcajaListComponent,
    CCajaFormComponent,
    CCajaListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ACajaService,CCajaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
