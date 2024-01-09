import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component'; 
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import{ HttpClientModule} from'@angular/common/http';
import { AllProductsComponent } from './all-products/all-products.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { OutsidemaintainanceComponent } from './pages/outsidemaintainance/outsidemaintainance.component';
import { AddToOutsideMaintainanceComponent } from './pages/add-to-outside-maintainance/add-to-outside-maintainance.component';
import { ShowOfficeDevicesComponent } from './pages/show-office-devices/show-office-devices.component';
import { WarrentymaintainanceComponent } from './pages/warrentymaintainance/warrentymaintainance.component';
import { HistoryComponent } from './pages/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    
    AllProductsComponent,
    SingleproductComponent,
    OutsidemaintainanceComponent,
    AddToOutsideMaintainanceComponent,
    ShowOfficeDevicesComponent,
    WarrentymaintainanceComponent,
    HistoryComponent
  
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
     TooltipModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
