import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map} from 'rxjs';

import { JSONResponse, Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService implements OnInit {
  totalTransactionAmount!: number;
  transactions = new Array;

  incomeTransactions: Transaction[] = [];
  outcomeTransactions: Transaction[] = [];
  investmentTransactions: Transaction[] = [];
  loanTransactions: Transaction[] = [];


  getTransactions() {
    return this.http.get<JSONResponse>('../assets/jsonviewer.json').pipe(
      map((res: JSONResponse) => {
        this.totalTransactionAmount = res.total;
           this.incomeTransactions = res.data.filter(
             (transactions) => transactions.type === 'income'
           );
           this.outcomeTransactions = res.data.filter(
             (transactions) => transactions.type === 'outcome'
           );
           this.investmentTransactions = res.data.filter(
             (transactions) => transactions.type === 'investment'
           );
           this.loanTransactions = res.data.filter(
             (transactions) => transactions.type === 'loan'
           );

         this.transactions.push(
           this.incomeTransactions,
           this.outcomeTransactions,
           this.investmentTransactions,
           this.loanTransactions
         );

      }),
    )
  }

  constructor(private http: HttpClient) {
    };

  ngOnInit() {}

  }


