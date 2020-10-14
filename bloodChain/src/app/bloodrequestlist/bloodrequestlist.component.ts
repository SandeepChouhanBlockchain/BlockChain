import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-bloodrequestlist',
  templateUrl: './bloodrequestlist.component.html',
  styleUrls: ['./bloodrequestlist.component.css']
})
export class BloodrequestlistComponent implements OnInit {

  constructor(public service:DataserviceService) { }
  dataArray;
  title = "List of Blood Request";
  ngOnInit() {
    this.viewBloodRequest();
  }
  viewBloodRequest(){
    console.log("inside component, ListOfBloodRequest()");
    this.service.bloodRequestList().subscribe(response =>{        
          console.log(response);
          this.dataArray = response;
      }); 
  }



}
