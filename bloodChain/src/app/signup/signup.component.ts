import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm:FormGroup;
  constructor(public service:DataserviceService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      username: new FormControl('', Validators.required),
      emailId: new FormControl('', Validators.required),
      ppassword: new FormControl('', Validators.required),
      cpassword: new FormControl('',Validators.required),
    });
  }

  onSubmit(){
    console.log("inside component, sign up " +this.profileForm.value );
    console.log(this.profileForm.value);
     var res1 = this.profileForm.value;
  //  this.service.registerDonor(this.profileForm.value);
  /*  this.service.registerDonor(res1).subscribe(res =>{
          console.log(res);
      });
  */
     
  }

}
