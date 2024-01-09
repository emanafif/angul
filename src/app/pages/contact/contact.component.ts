import { Component,OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Types:any=[];
  DTYPEid:any=0;
  Branches:any=[];
  Branchid:any=0;
  departments:any=[];
  departmentid:any=0;
  itemps:any=[];
  itempid:any=0;
  msg: string = "";

 
  constructor (private dataservice: DataService){
   this. getallbranches();
   this. getalldepts();
   this.getallITemps();

   
    }
    
    getallbranches(){
      this.dataservice.GetAllBranches().subscribe(
      
        res=>{
          this.Branches=res;
          console.log(res);
        },
        err=>console.log(err),
        ()=> console.log("done")
      )
     }

     getalldepts(){
      this.dataservice.GetAllDepartments().subscribe(
      
        res=>{
          this.departments=res;
          console.log(res);
        },
        err=>console.log(err),
        ()=> console.log("done")
      )
     }
     getallITemps(){
      this.dataservice.GetAllITemps().subscribe(
      
        res=>{
          this.itemps=res;
          console.log(res);
        },
        err=>console.log(err),
        ()=> console.log("done")
      )
     }
     
ngOnInit():void{
    this.dataservice.getalldeviceTypes().subscribe(
      
      res=>{
        this.Types=res;
        console.log(res);
      },
      err=>console.log(err),
      ()=> console.log("done")
    )
   }
   
   

   PostDevice(newdevice:any){
    if(newdevice.valid){
      this.dataservice.Postdevice(newdevice.value).subscribe(
        res=>{console.log(res) ,this.msg = 'تم الحفظ بنجاح  '
      },
        err=>console.log(err),
        ()=> newdevice.resetForm(),

      )
      console.log(newdevice.value);
     
    }

  }

}
