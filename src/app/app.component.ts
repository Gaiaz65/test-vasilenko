import { Component, OnInit } from '@angular/core';
import { TransactionsService } from './service/transactions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private trService: TransactionsService) {
  }
  ngOnInit(): void {
      this.trService.getTransactions().subscribe()
  }

  ngOnDestroy(): void {

  }
}
