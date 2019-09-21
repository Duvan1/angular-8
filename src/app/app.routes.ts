import { RouterModule, Routes } from '@angular/router';
import {PostsComponent}  from './components/posts/posts.component';
import {PostComponent}  from './components/posts/post.component';
import {DepartamentosComponent}  from './components/departamentos/departamentos.component';
import {DetallesComponent}  from './components/detalles/detalles.component';


const appRoutes: Routes = [
	{ path: 'departamentos', component: DepartamentosComponent },
	{ path: 'detalles/:id', component: DetallesComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'departamentos' }	
];

export const APP_ROUTING = RouterModule.forRoot(appRoutes);