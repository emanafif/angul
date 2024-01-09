import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-warrentymaintainance',
  templateUrl: './warrentymaintainance.component.html',
  styleUrls: ['./warrentymaintainance.component.css']
})
export class WarrentymaintainanceComponent {
  apidata:any=[]
  errorinDATA:any=[]

  constructor(private dataservice:DataService){
    dataservice.getallwarrentymaintainancedevices().subscribe(
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
