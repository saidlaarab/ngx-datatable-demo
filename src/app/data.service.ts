import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  pages:any = [
    [
      { name: 'Austin', gender: 'Male', company: 'Swimlane' },
      { name: 'Dany', gender: 'Male', company: 'KFC' },
      { name: 'Molly', gender: 'Female', company: 'Burger King' }
    ],
    [
      { name: 'Dobby', gender: 'Male', company: 'Google' },
      { name: 'Jane', gender: 'Female', company: 'Amazon' },
      { name: 'John', gender: 'Male', company: 'Spring' }
    ],
    [
      { name: 'Anne', gender: 'Female', company: 'Youtube' },
      { name: 'Rebecca', gender: 'Female', company: 'BBC' }  
    ]
  ];

  getPage(pageNumber: number): Observable<any>{
    return of(this.pages[pageNumber]);
  }
}
