import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080/';

@Injectable({
    providedIn: 'root'
})
export class CardapioService {

    constructor(private readonly http: HttpClient) { }

}
