import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemDto } from '../models/item-dto';

const API = 'http://localhost:8080/';

@Injectable({
    providedIn: 'root'
})
export class CardapioService {

    constructor(private http: HttpClient) { }

    findItens(nome: string, tipo: string): Observable<ItemDto[]> {
        if (nome) {
            return this.http.get<ItemDto[]>(`${API}cardapio?nome=${nome}`);
        }
        if (tipo){
            return this.http.get<ItemDto[]>(`${API}cardapio?tipo=${tipo}`);
        }
        return this.http.get<ItemDto[]>(`${API}cardapio`);
    }

    saveItem(item: ItemDto) {
        return this.http.post(API + "cardapio/", item);
    }

}
