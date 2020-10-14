import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm:FormGroup;
  constructor(public service:DataserviceService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      emailId: new FormControl('', Validators.required),
      ppassword: new FormControl('', Validators.required)
    });
  }
  
  onSubmit(){
    console.log("inside component, donor registration" +this.profileForm.value );
    console.log(this.profileForm.value);
     var res1 = this.profileForm.value;
  //  this.service.registerDonor(this.profileForm.value);
  /*  this.service.registerDonor(res1).subscribe(res =>{
          console.log(res);
      });
  */
     
  }

}
