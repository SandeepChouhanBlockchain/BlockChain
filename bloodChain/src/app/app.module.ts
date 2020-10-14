import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { RegisterdonorlistComponent } from './registerdonorlist/registerdonorlist.component';
import { BloodrequestlistComponent } from './bloodrequestlist/bloodrequestlist.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterdonorComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    BloodrequestComponent,
    RegisterdonorlistComponent,
    BloodrequestlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataserviceService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
