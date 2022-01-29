import { Component, OnInit } from '@angular/core';
import { ItemDto } from '../../models/item-dto';
import { CardapioService } from '../../services/cardapio.service';

@Component({
    selector: 'app-cardapio-list',
    templateUrl: './cardapio-list.component.html',
    styleUrls: ['./cardapio-list.component.css']
})
export class CardapioListComponent implements OnInit {

    itens: ItemDto[] = [];

    constructor(private service: CardapioService) { }

    ngOnInit(): void {
        this.service.findItens('').subscribe(itens => this.itens = itens);
    }

}
