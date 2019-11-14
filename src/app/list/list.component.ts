import { Component, OnInit } from '@angular/core';
import {PageSettingsModel } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public pageSettings: PageSettingsModel;
  constructor() { }

  ngOnInit(){

    this.data = this.data;
    this.pageSettings = { pageSize: 3};
  }

  public data: Object[]=[

  
      {
        MOVIENAME:'DDLJ', CAST: 'SRK', RATING: 5,
          YEAR: 2018, 
      },
      {
        MOVIENAME: 'BARFI', CAST: 'RK', RATING: 3,
        YEAR: 2019, 
      },
      {
        MOVIENAME: 'ROCKSTAR', CAST: 'RK', RATING: 2,
        YEAR: 2019, 
      }

  ]
 
}
