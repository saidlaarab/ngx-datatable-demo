import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Page } from './model/page';
import { EmployeService } from './service/employe.service';
import { Employe } from './model/employe';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page = new Page();
  rows:Employe[] = [];  
  columns = [{ prop: 'nomEmploye' }, { name: 'Prenom Employe' }, { name: 'Matricule' }];

  constructor(private dataService:DataService, private employeService:EmployeService){
    
  }

  ngOnInit(){
    // size of each page:
    this.page.size = 10;
    // get the total number of employees:
    this.employeService.loadTotalNumberOfEmployees().subscribe(
      (totalNbr:number) => {
         this.page.totalElements = totalNbr;
         // set the selected page to the first page:
         this.setPage({offset: 0});
      },
      error => {
         console.log('something wend wrong while fetching the total number of employees!');
      }
    );
  }

  setPage(pageInfo:any){
    // get the page number:
    const pageOffset = pageInfo.offset;
    this.page.pageNumber = pageOffset;

    console.log("offset of selected page: "+pageOffset);
    
    // load the total number of pages, then the list of employees from DB:
    this.employeService.loadEmployeePage(pageOffset+1).subscribe(
      (liste:any) =>{
        this.rows = liste;
        console.log("employee list loaded successfully.");
      },
      error => console.log("something went wrong while loading employee list!")  
    );
  }
}
