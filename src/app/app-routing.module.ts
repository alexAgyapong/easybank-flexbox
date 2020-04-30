import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EasyBankComponent } from './easy-bank/easy-bank.component';


const routes: Routes = [{ path: '', component: EasyBankComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
