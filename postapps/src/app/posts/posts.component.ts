import { Component } from '@angular/core';
import { Post } from "../shared/post.modl";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  
  posts: Post[] = [];
  createPosts(post: Post) {  
      this.posts.push({ id: this.posts.length + 1, title: post.title, content: post.content, Image: post.Image })   
  }

  deletePost(id) {
    this.posts = this.posts.filter(post => post.id !== id);
  }
 
  
  


}
