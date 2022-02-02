import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleDto } from '../../models/role-dto';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    user!: string;
    senha!: string;
    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(private router: Router, public autenticacao: LoginService, public route: ActivatedRoute) { }

    async login() {
        let role = this.autenticacao.login(this.user, this.senha).toPromise();
        this.autenticacao.trancode = await role as RoleDto;
        if (this.autenticacao.trancode) {
            this.autenticacao.logado = true;
            this.router.navigate(['home']);
        }
    }

    ngOnInit(): void {
        if (!this.autenticacao.logado) {
            this.router.navigate(['']);
        }
    }

    close(reason: string) {
        this.sidenav.close();
        if (reason !== 'backdrop') {
            this.router.navigate([reason]);
        }
    }
}
