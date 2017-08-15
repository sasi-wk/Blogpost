import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Post } from "../shared/post.modl";

@Component({
  selector: 'app-postsform',
  templateUrl: './postsform.component.html',
  styleUrls: ['./postsform.component.css']
})
export class PostsformComponent {
  @Output() formsubmit: EventEmitter<Post> = new EventEmitter();

  model: Post = new Post();

  createPost() {
    this.formsubmit.emit(this.model);
    //console.log(this.model);
    this.model = new Post();
  }

  Changeimage(image) {
    this.model.Image = image;
  }





}
