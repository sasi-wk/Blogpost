import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsformComponent } from './postsform/postsform.component';
import { PostslistComponent } from './postslist/postslist.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { ImagepostComponent } from './imagepost/imagepost.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsformComponent,
    PostslistComponent,
    AllpostsComponent,
    ImagepostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
