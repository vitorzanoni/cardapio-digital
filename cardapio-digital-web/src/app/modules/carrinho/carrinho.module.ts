import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoListComponent } from './components/carrinho-list/carrinho-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
    {
        path: '', 
        component: CarrinhoListComponent
    }
];
@NgModule({
  declarations: [
    CarrinhoListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CarrinhoModule { }
