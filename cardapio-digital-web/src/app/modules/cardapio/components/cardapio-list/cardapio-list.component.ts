import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { CarrinhoService } from 'src/app/modules/carrinho/services/carrinho.service';
import { ItemDto } from '../../models/item-dto';
import { CardapioService } from '../../services/cardapio.service';

@Component({
    selector: 'app-cardapio-list',
    templateUrl: './cardapio-list.component.html',
    styleUrls: ['./cardapio-list.component.css']
})
export class CardapioListComponent implements OnInit {

    edit = false;
    item = new ItemDto;
    itens: ItemDto[] = [];

    constructor(private service: CardapioService, private router: Router, private carrinho: CarrinhoService, public autenticacao: LoginService, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.service.findItens('', this.router.url).subscribe(itens => this.itens = itens);
    }

    adicionar(item: ItemDto): void {
        this.carrinho.adicionar(item);
        this.snackBar.open(item.nome + ' adicionado ao carrinho.', 'OK', { horizontalPosition: 'center',
            verticalPosition: 'top'});
    }

    editar(item: ItemDto): void {
        this.edit = true;
        this.item.id = item.id;
        this.item.nome = item.nome;
        this.item.descricao = item.descricao;
        this.item.valor = item.valor;
        this.item.imagem = item.imagem;
        this.item.tipo = item.tipo;
    }

    async excluir(item: ItemDto) {
        await this.service.deleteItem(item).toPromise();
        this.ngOnInit()
    }

    async salvar() {
        this.edit = false;
        await this.service.editItem(this.item).toPromise();
        this.ngOnInit()
    }

}
