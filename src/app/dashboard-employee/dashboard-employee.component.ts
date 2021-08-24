import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {

  searchEmployee = "";
  dataset = [];
  isAddEnabled = false;

  constructor(private appService: AppServiceService, private route: Router) {
  }

  ngOnInit(): void {
    this.appService.getAllEmployeeDetails().subscribe((res: any) => {
      this.dataset = res;
      // let newOrModData = this.appService.getData();
      // if (newOrModData) {
      //   if (newOrModData.employeeDetails.id) {
      //     const index = this.dataset.findIndex(v => v.employeeDetails.id == newOrModData.employeeDetails.id);
      //     console.log(index)
      //     if (index >= 0)
      //       this.dataset[index] = newOrModData;
      //   } else {
      //     newOrModData.employeeDetails.id = "E-id" + (this.dataset.length + 1);
      //     newOrModData.laptopDetails.id = "L-id" + (this.dataset.length + 1);
      //     this.dataset.push(newOrModData);
      //   }
      //   }
    })
  }

  deleteEmployee(employeeId) {
    const index = this.dataset.findIndex(v => v.employeeDetails.id == employeeId);
    if (index >= 0)
      this.dataset.splice(index, 1);
  }
  public currentEmployee: any;
  public type = "Add";
  addEditEmployee(employeeD) {
    this.currentEmployee = {
      "employeeDetails": {
        "name": "",
        "id": null
      },
      "laptopDetails": {
        "name": "",
        "id": null
      }
    };
    if (employeeD) {
      this.type = "Update";
      this.currentEmployee = employeeD;
    }
    this.isAddEnabled = true;
  }
  saveEmployee() {
    let newOrModData = this.currentEmployee;
    console.log(this.currentEmployee)
    if (newOrModData) {
      if (newOrModData.employeeDetails.id) {
        const index = this.dataset.findIndex(v => v.employeeDetails.id == newOrModData.employeeDetails.id);
        if (index >= 0)
          this.dataset[index] = newOrModData;

        this.isAddEnabled = false;
      } else {
        newOrModData.employeeDetails.id = "E-id" + (this.dataset.length + 1);
        newOrModData.laptopDetails.id = "L-id" + (this.dataset.length + 1);
        this.dataset.push(newOrModData);
        
        this.isAddEnabled = false;
      }
    }

  }

}
