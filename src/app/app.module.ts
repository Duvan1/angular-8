import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
//modulos de los formularios
import {FormsModule} from '@angular/forms';
//servicio delos posts
import {DepartamentosService} from "./services/departamentos.service";


//routing
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DetallesComponent } from './components/detalles/detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    APP_ROUTING
  ],
  providers: [/*proveer el servicio de los posts*/DepartamentosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
