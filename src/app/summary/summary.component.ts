import { Component, OnInit } from '@angular/core';

import { TransactionsService } from './../service/transactions.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  transactions = new Array();

  constructor(public trService: TransactionsService) {}

  setTransactions(transactions:any[]) {
    this.transactions = transactions;
  }

  ngOnInit(): void {
    this.setTransactions(this.trService.transactions)
  }

}
