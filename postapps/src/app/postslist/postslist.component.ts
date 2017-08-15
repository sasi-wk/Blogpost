import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Post } from "../shared/post.modl";

@Component({
  selector: 'app-postslist',
  templateUrl: './postslist.component.html',
  styleUrls: ['./postslist.component.css']
})
export class PostslistComponent  {
@Input () posts:Post[];
@Output () postDelete = new EventEmitter();
 
deletePost(id){
  this.postDelete.emit(id);
  //alert('postlist ok')
}


}
