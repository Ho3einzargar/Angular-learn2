import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = "https://api.github.com/users";
  constructor(private http: HttpClient) {}

    getPosts(){
     return this.http.get(this.url)
    }
    
}
