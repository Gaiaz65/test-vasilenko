import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs';

import { JSONResponse, Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  totalTransactionAmount!: number;
  transactions = new Array();

  incomeTransactions: Transaction[] = [];
  outcomeTransactions: Transaction[] = [];
  investmentTransactions: Transaction[] = [];
  loanTransactions: Transaction[] = [];

  constructor(private http: HttpClient) {}

  getTransactions() {
    return this.http.get<JSONResponse>('../assets/jsonviewer.json').pipe(
      map((fullResponse: JSONResponse) => {
        this.totalTransactionAmount = fullResponse.total;

        fullResponse.data.forEach((transaction) => {
          switch (transaction.type) {
            case 'income':
              this.incomeTransactions.push(transaction);
              break;
            case 'outcome':
              this.outcomeTransactions.push(transaction);
              break;
            case 'investment':
              this.investmentTransactions.push(transaction);
              break;
            default:
              this.loanTransactions.push(transaction);
          }
        });

        this.transactions.push(
          this.incomeTransactions,
          this.outcomeTransactions,
          this.investmentTransactions,
          this.loanTransactions
        );
      })
    );
  }
}


