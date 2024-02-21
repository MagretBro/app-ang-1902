import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data/data.service';


@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})

export class TableCompComponent implements OnInit {
  dataSource: { id: string, name: string }[] = []; // Define dataSource property
  displayedColumns: string[] = ['id', 'name']; // Define displayedColumns property
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let res: { [key: string]: string } = this.dataService.getCountryList(); // Добавьте тип здесь

    console.log(res);
    this.dataSource = Object.keys(res).map(key => ({ id: key, name: res[key] }));

    }

}



  // ngOnInit(): void {
  //   this.dataSource = this.dataService.getData();
  // }
   