import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angul';

  test(){
    return "ggggggg"
  }
  isdisabeled=false

counter=1
increase(){
  this.counter++}
  decrease(){
    this.counter--}
  

  mydisplay="block"
message="hide"

showhide(){
  if(this.mydisplay=="block")
  {
    this.mydisplay="none"
    this.message="show"
}
  else{
    this.mydisplay="block"

    this.message="hide"
  }
}






}


