import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { CarrinhoListComponent } from './components/carrinho-list/carrinho-list.component';

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
