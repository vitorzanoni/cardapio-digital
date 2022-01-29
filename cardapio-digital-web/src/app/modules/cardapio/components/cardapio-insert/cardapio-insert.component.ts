import { Component, OnInit } from '@angular/core';
import { ItemDto } from '../../models/item-dto';
import { CardapioService } from '../../services/cardapio.service';

@Component({
  selector: 'app-cardapio-insert',
  templateUrl: './cardapio-insert.component.html',
  styleUrls: ['./cardapio-insert.component.css']
})
export class CardapioInsertComponent {

  nome = '';
  descricao = '';
  valor = '' ;
  imagem = '';
  checked = false;
  indeterminate = false;
  labelPosition: '/cardapio/comidas' | '/cardapio/bebidas' | '/cardapio/sobremesas' = '/cardapio/comidas';
  disabled = false;

  constructor(private service: CardapioService) { }

  salvar(): void{
    const item = new ItemDto;
    item.nome = this.nome;
    item.descricao = this.descricao;
    item.valor = this.valor;
    item.imagem = this.imagem;
    this.service.saveItem(item).subscribe();
    this.nome = '';
    this.descricao = '';
    this.valor = '';
    this.imagem = '';

    console.log(item);
  }
}
