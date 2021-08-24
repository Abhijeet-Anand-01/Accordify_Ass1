import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  // private shareEmployeeDetails = null;;
  // getData() { const data = this.shareEmployeeDetails; this.shareEmployeeDetails = null; return data; }
  // setData(value: any) { this.shareEmployeeDetails = value; }

  constructor(private http: HttpClient) { }

  getAllEmployeeDetails() {
    return this.http.get('assets/employee.json');
  }
}
