import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgModel } from '@angular/forms'; 

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  apidata:any=[];
 filtereddata: any=[];

  errorinDATA:any=[];
  apidata2:any=[];
  Searchkey: string =""
  searchdata:any=[];
  constructor(private dataservice:DataService){
    dataservice.maintainanceHistory().subscribe(
      data=>{
        this.apidata=data;
        this.filtereddata=data;

    },
    err=> {
      this.errorinDATA=err.message
    },
    ()=> console.log("done")
      
    )
  //  this. DeadHistory();
  }
  // // Searchhistory():void{
  // //   this.dataservice.searchHistory().subscribe(
      
  // //     res=>{
  // //       this.searchdata=res;
  // //       console.log(res);
  // //     },
  // //     err=>console.log(err),
  // //     ()=> console.log("done")
  // //   )
  // }

 

  FilterData(){
    
 this.filtereddata=this.apidata.filter((api:any)=>{
  let filterText = this.Searchkey.toLocaleLowerCase();

        if (api.serial_No.includes(filterText)) {
          console.log(api)
            return api;
   }})
}
  // DeadHistory():void{
  //   this.dataservice.deadHistory().subscribe(
      
  //     res=>{
  //       this.apidata2=res;
  //       console.log(res);
  //     },
  //     err=>console.log(err),
  //     ()=> console.log("done")
  //   )
  // }

}
