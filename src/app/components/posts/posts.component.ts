import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../servicios/posts.service';
import {Router,  ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	public varErr : any;
	public posts : any;

  constructor(private postService : PostsService, private router : Router) { }

  ngOnInit() {
  	this.postService.getPosts().subscribe(
  		res => {
  			this.posts = res;
  			console.log(this.posts)
  		},
  		err => {
  			this.varErr = err;
  			console.log(this.varErr)
  		}
  	)
  }

  borrarPost(id){
    this.postService.deletePost(id).subscribe(
      res => {
        delete this.posts[(id - 1)];
        window.location.reload();
      },
      err => console.log(err)
    )
  }

}
