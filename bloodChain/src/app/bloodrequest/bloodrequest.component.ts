import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-bloodrequest',
  templateUrl: './bloodrequest.component.html',
  styleUrls: ['./bloodrequest.component.css']
})
export class BloodrequestComponent implements OnInit {
  profileForm:FormGroup;
  constructor(public service:DataserviceService) { }

  ngOnInit() {
    this.profileForm = new FormGroup({
      _hospitalName: new FormControl("",[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      _hospitalAddress: new FormControl("", Validators.required),
      _hospitalId: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{1,100}$")]),
      _bloodGroup: new FormControl('O+',Validators.required),
      _HospitalAddressLandmark: new FormControl("",Validators.required),
      _HospitalAddressPincode: new FormControl("",[Validators.required,Validators.pattern("[0-9'-]{6}$")]),
    });
  }

  onSubmit(){
    console.log("inside component, blood request" +this.profileForm.value );
    console.log(this.profileForm.value);
     var res1 = this.profileForm.value;
  //  this.service.registerDonor(this.profileForm.value);
      this.service.addBloodRequest(res1).subscribe(res =>{
              console.log(res);
              if(res["message"] == true){
                alert("Blood Request Added Successfully !!");
                this.profileForm = new FormGroup({
                  _hospitalName: new FormControl(""),
                  _hospitalAddress: new FormControl(""),
                  _hospitalId: new FormControl(""),
                  _bloodGroup: new FormControl('O+'),
                  _HospitalAddressLandmark: new FormControl(""),
                  _HospitalAddressPincode: new FormControl(""),
                });
              }else{
                  alert(res["message"]);
              }
        }); 
  }

}
