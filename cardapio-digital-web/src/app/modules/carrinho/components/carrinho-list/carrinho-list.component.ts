import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ItemDto } from 'src/app/modules/cardapio/models/item-dto';
import { CarrinhoService } from '../../services/carrinho.service';

@Component({
    selector: 'app-carrinho-list',
    templateUrl: './carrinho-list.component.html',
    styleUrls: ['./carrinho-list.component.css']
})
export class CarrinhoListComponent implements OnInit {
    displayedColumns: string[] = ['nome', 'valor'];
    dataSource = new MatTableDataSource<ItemDto>();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    total = 0;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    constructor(private carrinho: CarrinhoService, private snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.dataSource.data = this.carrinho.itens;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.calculaTotal();
    }

    calculaTotal(): void {
        this.dataSource.data.forEach(item => this.total += Number(item.valor));
    }

    acionar(): void {
        this.snackBar.open('Um garçom será solicitado para te atender.', 'OK', { horizontalPosition: 'center',
            verticalPosition: 'top'});
    }

}
