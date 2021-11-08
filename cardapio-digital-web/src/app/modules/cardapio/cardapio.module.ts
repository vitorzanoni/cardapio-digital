import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardapioListComponent } from './components/cardapio-list/cardapio-list.component';

@NgModule({
    declarations: [
        CardapioListComponent
    ],
    imports: [
        SharedModule
    ]
})
export class CardapioModule { }
