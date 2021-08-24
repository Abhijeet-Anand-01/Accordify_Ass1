import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public type = "Create";
  public currentEmployee: any = {
    "employeeDetails": {
      "name": "",
      "id": null
    },
    "laptopDetails": {
      "name": "",
      "id": ""
    }
  };

  constructor(private appService: AppServiceService, private router: Router) {
    const retievedData = this.appService.getData();
    if (retievedData) {
      this.type = "Update";
      this.currentEmployee = retievedData;
    }
  }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.appService.setData(this.currentEmployee);
    this.router.navigate(["/dashboard"])
  }

}
