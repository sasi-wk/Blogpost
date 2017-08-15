import { Component, Output, ViewChild, EventEmitter, Renderer, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-imagepost',
  templateUrl: './imagepost.component.html',
  styleUrls: ['./imagepost.component.css']
})
export class ImagepostComponent implements OnChanges {
  @Input() image: string;
  @Output() imageChange = new EventEmitter();

  @ViewChild('uploader') fileInput;

  constructor(private renderer: Renderer) { }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    console.log(this.image)
    if (!changes['image'].currentValue) {
      this.image = "/assets/image/no-image.png";
    }

  }

  triggerFileUpload(){
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement,'dispatchEvent',[new MouseEvent('click',{bubbles:true})]
    )
  }

  uploadImage(event) {
    const reader = new FileReader();
    const image = event.target.files[0];
    reader.onload = () => {
      const result = reader.result;
      this.image = result
      this.imageChange.emit(result);
      //console.log(result);
    }
    reader.readAsDataURL(image);
  }

}
