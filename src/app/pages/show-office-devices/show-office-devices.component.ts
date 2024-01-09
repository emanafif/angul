import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-show-office-devices',
  templateUrl: './show-office-devices.component.html',
  styleUrls: ['./show-office-devices.component.css']
})
export class ShowOfficeDevicesComponent {
  apidata:any=[];
  errorinDATA:any=[];

  constructor(private dataservice:DataService){
    dataservice.GetAllOfficeDevices().subscribe(
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
