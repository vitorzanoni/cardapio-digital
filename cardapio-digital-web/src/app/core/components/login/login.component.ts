import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleDto } from '../../models/role-dto';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  role!: RoleDto;
  user!: string;
  senha!: string; 

  constructor(private service: LoginService, private router: Router) { }
  
  login(): void {  
    this.service.login(this.user, this.senha).subscribe(role => this.role = role);
    console.log(this.role);
    if(this.role) {
      this.service.logado = true;
      this.router.navigateByUrl('');
    }
  }
}
