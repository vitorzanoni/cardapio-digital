import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {

    constructor(private readonly http: HttpClient) { }

}
