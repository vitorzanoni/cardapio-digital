import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardapioListComponent } from './components/cardapio-list/cardapio-list.component';
import { CardapioInsertComponent } from './components/cardapio-insert/cardapio-insert.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '', 
        component: CardapioListComponent
    }, 
    {
        path: 'insert', 
        component: CardapioInsertComponent
    }
];
@NgModule({
    declarations: [
        CardapioListComponent,
        CardapioInsertComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class CardapioModule { }
