import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})

export class TableCompComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataSource = this.dataService.getData();
  }
   
}

