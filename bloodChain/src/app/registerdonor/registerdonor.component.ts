import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-registerdonor',
  templateUrl: './registerdonor.component.html',
  styleUrls: ['./registerdonor.component.css']
})
export class RegisterdonorComponent implements OnInit {
  profileForm:FormGroup;
  constructor(public service:DataserviceService) { /*public service:DataserviceService */ }

 

  ngOnInit() {
    this.profileForm = new FormGroup({
      donarName: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      donarNameLast: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      donarAddress: new FormControl("", Validators.required),
      donarAge: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{1,3}$")]),
      donarAaadhar: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{12}$")]),
      donarBloodGroup: new FormControl('O+',Validators.required),
      donarMobileNo: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{10}$")]),
      donarAddressLandmark: new FormControl("",Validators.required),
      donarAddressPincode: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{6}$")]),
    });
  }


  onSubmit(){
    console.log("inside component, donor registration" +this.profileForm.value );
    console.log(this.profileForm.value);
     var res1 = this.profileForm.value;
  //  this.service.registerDonor(this.profileForm.value);
    this.service.registerDonor(res1).subscribe(res =>{        
          console.log(res);
          if(res["message"] == true){
              alert("Registered Successfully !!");
              this.profileForm = new FormGroup({
                donarName: new FormControl(""),
                donarNameLast: new FormControl(""),
                donarAddress: new FormControl(""),
                donarAge: new FormControl(""),
                donarAaadhar: new FormControl(""),
                donarBloodGroup: new FormControl('O+',Validators.required),
                donarMobileNo: new FormControl(""),
                donarAddressLandmark: new FormControl(""),
                donarAddressPincode: new FormControl("")
              });
          }else{
              alert(res["message"]);
          }
      }); 
  }


}
