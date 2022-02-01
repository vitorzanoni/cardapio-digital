import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoleDto } from '../models/role-dto';

const API =  'http://localhost:8080/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  logado!: boolean;
  
  constructor(private http: HttpClient) {}

  login(user: string, senha: string): Observable<RoleDto> {
    return this.http.get<RoleDto>(`${API}?user=${user}&senha=${senha}`);

  }
}