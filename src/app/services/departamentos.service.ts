import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

	public uriDepartamentos = 'http://www.mocky.io/v2/5d4cc7853300004a0033742b';
	public uriDetalles = 'http://www.mocky.io/v2/5d4cc839330000520033742d';
  constructor(private http: HttpClient) { }

  //petición get de los departamentos
  getDepartamentos(){
  	return this.http.get(this.uriDepartamentos);
  }
  getDetails(){
  	return this.http.get(this.uriDetalles);
  }
}
