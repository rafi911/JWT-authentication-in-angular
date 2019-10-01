import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Posts } from '../models/post';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  postsArray : Array<Posts>;
  modalRef: BsModalRef;  
  isPostEditable: boolean;
  postForm : FormGroup;
  constructor(
    private postService: PostService,
    private router: Router,
    private modalService: BsModalService,
    private fb : FormBuilder
    ) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((posts: Array<Posts>) => {
      this.postsArray = posts;
      console.log('Data',posts);
    })
  }

  editPost(template: TemplateRef<any>, post: Posts){
    console.log('post', post)
    this.postForm = this.fb.group({
      title: [post.title, Validators.required],
      body: [post.body, Validators.required]     
    });
    this.isPostEditable  = true;
    this.modalRef = this.modalService.show(template);
  }
  getComments(postId: any){
    this.router.navigate(['/comments'],{queryParams: {postId : postId}});
  }
}
