
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {


  @Input() transactions!: Transaction[];

  constructor() { }

  ngOnInit(): void {
  }

}
