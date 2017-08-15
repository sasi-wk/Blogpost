import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Post } from "../shared/post.modl";

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent  {
  @Input () post:Post;
  @Output () postDelete:EventEmitter<number> = new EventEmitter();

  deletePost(){
    this.postDelete.emit(this.post.id);
    //alert(this.post.Image)
  }
 

  
}
