import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Posts } from '../models/post';
import { Comments } from '../models/comment';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

export class PostDetailsComponent implements OnInit {

  modalRef: BsModalRef;
  private  postId;
  private post : Posts;
  commentForm : FormGroup;
  isCommentEditable: boolean;
  constructor(
    private postService: PostService,
    private route : Router,
    private activateRoute : ActivatedRoute,
    private modalService: BsModalService,
    private fb : FormBuilder
    ) { }
    
  ngOnInit() {
    this.postId = this.activateRoute.snapshot.queryParamMap.get('postId');
    this.postService.getComments(this.postId).subscribe((comments: Array<Comments>) => {
      this.postService.getPost(this.postId).subscribe((post: Posts) => {
        this.post = post;
        this.post.comments = comments;
      console.log('comments', comments);     

      })
    })

    
  }
  openModal(template: TemplateRef<any>, comment : any) {
    this.commentForm = this.fb.group({
      name: [comment.name, Validators.required],
      email: [comment.email, Validators.required],
      body: [comment.body,Validators.required]
    });
    this.isCommentEditable = true;
    console.log('comments', comment)
    
    this.modalRef = this.modalService.show(template);
  }

}
