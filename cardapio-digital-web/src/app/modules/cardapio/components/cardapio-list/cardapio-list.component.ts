import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { ItemDto } from '../../models/item-dto';
import { CardapioService } from '../../services/cardapio.service';

@Component({
    selector: 'app-cardapio-list',
    templateUrl: './cardapio-list.component.html',
    styleUrls: ['./cardapio-list.component.css']
})
export class CardapioListComponent implements OnInit {

    itens: ItemDto[] = [];

    constructor(private service: CardapioService, private router: Router, private carrinho: CarrinhoService) { }

    ngOnInit(): void {
        this.service.findItens('', this.router.url).subscribe(itens => this.itens = itens);
    }

    adicionar(item: ItemDto): void {
        this.carrinho.adicionar(item);
    }

}
