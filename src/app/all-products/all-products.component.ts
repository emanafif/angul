import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {

  products : Products[]=[]
  filtereddata : Products[]=[]
  errormsg:string=""
  isloaded: boolean=false
  searchkey: string=""
  constructor(private _data:DataService){}
  

  

    filterdata(){
      this.filtereddata=this.products.filter(pro=>{
        return pro.title.includes(this.searchkey) }
        )
    }
  }


