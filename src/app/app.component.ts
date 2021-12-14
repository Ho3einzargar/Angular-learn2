import { PostService } from './services/post.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from './post.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular-learn';
  postArray;

  openid(x){
    console.log(x);
  }
  
  ngOnInit(){
    this.postService.getPosts().subscribe(
    response => this.postArray = response
    );
  }
  constructor(private postService:PostService){}

} 
