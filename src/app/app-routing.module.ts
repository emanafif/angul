import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OutsidemaintainanceComponent } from './pages/outsidemaintainance/outsidemaintainance.component';
import { AddToOutsideMaintainanceComponent } from './pages/add-to-outside-maintainance/add-to-outside-maintainance.component';
import { ShowOfficeDevicesComponent } from './pages/show-office-devices/show-office-devices.component';
import { WarrentymaintainanceComponent } from './pages/warrentymaintainance/warrentymaintainance.component'; 
import { HistoryComponent } from './pages/history/history.component';  

const routes: Routes = [

  {path:"", component:ContactComponent},
  {path:"OutsidemaintainanceComponent", component:OutsidemaintainanceComponent},
  {path:"AddToOutsideMaintainanceComponent", component:AddToOutsideMaintainanceComponent},
  {path:"ShowOfficeDevicesComponent", component:ShowOfficeDevicesComponent},
  {path:"WarrentymaintainanceComponent", component:WarrentymaintainanceComponent},
  {path:"HistoryComponent",component:HistoryComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
