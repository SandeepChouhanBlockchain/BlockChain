import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterdonorComponent } from './registerdonor/registerdonor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BloodrequestComponent } from './bloodrequest/bloodrequest.component';
import { RegisterdonorlistComponent } from './registerdonorlist/registerdonorlist.component';
import { BloodrequestlistComponent } from './bloodrequestlist/bloodrequestlist.component';

const routes: Routes = [{
  'path':'register', component:RegisterdonorComponent
},{
  'path':'signup', component:SignupComponent
},{
  'path':'login', component:LoginComponent
},{
  'path':'request',component:BloodrequestComponent
},{
  'path':'viewdonor', component:RegisterdonorlistComponent
},{
  'path':'viewrequest', component:BloodrequestlistComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
