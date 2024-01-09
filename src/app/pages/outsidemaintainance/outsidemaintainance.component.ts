import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-outsidemaintainance',
  templateUrl: './outsidemaintainance.component.html',
  styleUrls: ['./outsidemaintainance.component.css']
})
export class OutsidemaintainanceComponent {
  apidata:any=[]
  errorinDATA:any=[]

  constructor(private dataservice:DataService){
    dataservice.getalloutsidemaintainancedevices().subscribe(
      data=>{
        this.apidata=data;
      },
    err=> {
      this.errorinDATA=err.message
    },
    ()=> console.log("done")
      
    )
    
  }
 

}
