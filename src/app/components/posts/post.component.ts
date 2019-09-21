import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PostInterface} from "../../interfaces/post.interface";
import {PostsService} from "../../servicios/posts.service";
import {Router,  ActivatedRoute} from "@angular/router";




@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	id:string;
	blog:PostInterface ={
		title:"",
		body:"",
		userId :1
	}

	constructor(private postService:PostsService, private router: Router, private route: ActivatedRoute) {
		this.route.params.subscribe(
			parametros => {
				this.id = parametros['id'];
				console.log(this.id);
				if (this.id != 'nuevo') { 
					this.postService.getPost(this.id).subscribe(
						res =>{
							this.blog.id = parseInt(this.id);
							this.blog.title = res['title'];
							this.blog.body = res['body'];
							this.blog.userId = res['userId'];
						},
						err => {alert("melon't")});
				} 
			});
	}


	ngOnInit() {
	}

	guardar(){
		if (this.id == 'nuevo' && this.id) { 
			this.postService.crearPosts(this.blog).subscribe(
				res =>{this.router.navigate(['posts'])},
				err => {alert("melon't")});
		} else {
			this.postService.actualizarPosts(this.blog).subscribe(
				res =>{this.router.navigate(['posts'])},
				err => {console.log(err)});
		}
		
	}

}
