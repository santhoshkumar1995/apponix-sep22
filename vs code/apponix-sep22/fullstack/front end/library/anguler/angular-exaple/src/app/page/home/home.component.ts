import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
img1:string
img2:string
img3:string


  constructor(){
    this.img1='../../../assets/image/img1.jpg'
    this.img2='../../../assets/image/img2.jpg'
    this.img3='../../../assets/image/img3.jpg'

  }

}
