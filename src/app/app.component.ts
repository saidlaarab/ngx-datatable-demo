import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Page } from './model/page';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page = new Page();
  rows = [];  
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  constructor(private dataService:DataService){
    this.page.pageNumber = 0;
    this.page.size = 3;
    this.page.totalElements = 8;
  }

  ngOnInit(){
    this.setPage({offset: 0});
  }

  setPage(pageInfo:any){
    this.page.pageNumber = pageInfo.offset;
    console.log("offset of selected page: "+pageInfo.offset)
    this.dataService.getPage(this.page.pageNumber).subscribe( data => this.rows = data);
    
  }
}
