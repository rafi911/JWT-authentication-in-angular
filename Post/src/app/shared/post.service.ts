import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getComments(postId){
    const options = postId ?
   { params: new HttpParams().set('postId', postId) } : {};
    return this.http.get('https://jsonplaceholder.typicode.com/comments/', options);
  }
  getPost(postId){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  }
}
