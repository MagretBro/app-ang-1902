import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-comp',
  templateUrl: './table-comp.component.html',
  styleUrls: ['./table-comp.component.scss']
})

export class TableCompComponent {
  displayedColumns: string[] = ['id', 'name'];
  dataSource = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
 
  ];
}



// export class TableCompComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
