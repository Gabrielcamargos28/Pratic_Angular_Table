import { Component, OnInit } from '@angular/core';
import { SalePerson } from './sale-person-class';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  constructor() {}

  salesPersonList: SalePerson[] = [
    new SalePerson('Joao', 'Mezenga', '@jm', 75000),
    new SalePerson('Maria', 'jose', '@mj', 80000),
    new SalePerson('Mario', 'jose', '@mj', 80000),
    new SalePerson('Jack', 'Daniel', '@mj', 40000),
  ];

  ngOnInit(): void {}
}
