import { TransactionComponent } from './transaction/transaction.component';
import { SummaryComponent } from './summary/summary.component';
import { ListpageComponent } from './listpage/listpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: SummaryComponent },
  {
    path: 'navigator',
    component: ListpageComponent,
    children: [{ path: '', component: TransactionComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
