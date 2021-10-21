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
  columns = [{ prop: 'nomEmploye' }, { name: 'prenomEmploye' }, { name: 'Matricule' }];

  constructor(private dataService:DataService, private employeService:EmployeService){
    
  }

  ngOnInit(){
    // size of each page:
    this.page.size = 10;
    // set the selected page to the first page:
    this.setPage({offset: 0});
  }

  setPage(pageInfo:any){
    // get the page number:
    this.page.pageNumber = pageInfo.offset;
    console.log("offset of selected page: "+pageInfo.offset);
    
    // load the total number of pages, then the list of employees from DB:
    this.employeService.loadTotalPagesNumber().subscribe(
      (totalPages:{nbrPages: number}) => {
        // Figure out the total number of employees based on the total number of pages:
        console.info("Total Number of pages: ", totalPages);
        this.page.totalElements = totalPages.nbrPages * this.page.size; // actually, it is less than this! but this works fine.
        // Get page of employees:
        this.employeService.loadEmployeePage(pageInfo.offset+1).subscribe(
          (liste:any) =>{
            this.rows = liste;
            console.log("employee list loaded successfully.");
          },
          error => console.log("something went wrong while loading employee list!")  
        );
      },
      error => console.log("something went wrong while loading total number of pages!") 
    );

  }
}
