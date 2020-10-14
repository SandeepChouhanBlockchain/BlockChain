import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-registerdonorlist',
  templateUrl: './registerdonorlist.component.html',
  styleUrls: ['./registerdonorlist.component.css']
})
export class RegisterdonorlistComponent implements OnInit {

  constructor(public service:DataserviceService) { }
  dataArray;
  title = "List of Registered Donor's ";
  ngOnInit() {
      this.viewDonorList();
  }
  
  viewDonorList(){
    console.log("inside component, RegisteredDonorList");
    this.service.registerDonorList().subscribe(response =>{        
          console.log(response);
          this.dataArray = response;
      }); 
  }

}
