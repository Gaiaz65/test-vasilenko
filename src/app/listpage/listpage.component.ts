import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { TransactionsService } from './../service/transactions.service';

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.component.html',
  styleUrls: ['./listpage.component.scss'],
})
export class ListpageComponent implements OnInit {
  transactions = new Array();

  constructor(private trService: TransactionsService, public router: Router) {}


  setTransactions(transactions: any[]) {
    this.transactions = transactions;

  }

  ngOnInit() {
    this.setTransactions(this.trService.transactions);
  }
}
