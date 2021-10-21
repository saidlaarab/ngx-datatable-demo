import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employe } from '../model/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService implements OnInit{
  apiUrl:string = environment.apiUrl;
  employes: Employe[]=[];
  
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
  }

  loadEmployeePage(pageNumber: number): Observable<any>{
    return this.http.get(this.apiUrl+'/employes/pages/'+pageNumber);
  }

  loadTotalNumberOfEmployees(): Observable<any>{
    return this.http.get(this.apiUrl+'/employes/nbr-total');
  }

  getEmployeeList(): Employe[]{
    return this.employes;
  }
}