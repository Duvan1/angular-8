import { Component, OnInit } from '@angular/core';
import { DepartamentosService} from '../../services/departamentos.service';
import {DetailsInterface} from '../../interfaces/detalles.interface';

@Component({
	selector: 'app-departamentos',
	templateUrl: './departamentos.component.html',
	styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
	public departamentos : any;
	public error : any
	public detalles: DetailsInterface = {
		nombre :"",
		departamento : "",
		detalles : []
	}
	public sinDetalles;

	constructor(private departamentoHttp: DepartamentosService) { }

	ngOnInit() {
		this.departamentoHttp.getDepartamentos().subscribe(
			res => {
				this.departamentos = res['areas'];
				console.log(this.departamentos[0]);
			},
			err =>{this.error = err}
			)
	}

	obtenerDetalles(nombre){
		if (nombre == "contabilidad") {
			this.departamentoHttp.getDetails().subscribe(
				res => {
					this.detalles.nombre = res['name'];	
					this.detalles.departamento = res['departament'];	
					this.detalles.detalles = res['details'];			
					this.sinDetalles = ""
				},
				err =>{this.error = err}
				)
		}else{
			this.sinDetalles = "No hay detalles para este departamento"
		}

	}

}
