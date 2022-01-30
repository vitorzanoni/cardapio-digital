import { Injectable } from '@angular/core';
import { ItemDto } from '../../cardapio/models/item-dto';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoService {

    itens: ItemDto[] = [];

    adicionar(item: ItemDto): void {
        this.itens.push(item);
    }

    getItens() {
        return this.itens;
    }

}
