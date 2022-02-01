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

    logado!: boolean;
    role!: RoleDto;
    user!: string;
    senha!: string;
    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(private router: Router, private autenticacao: LoginService, public route: ActivatedRoute) { }

    async login() {
        let role = this.autenticacao.login(this.user, this.senha).toPromise();
        this.role = await role as RoleDto;
        if (this.role) {
            this.logado = true;
            this.router.navigate(['home']);
        }
    }

    ngOnInit(): void {
        if (this.logado) {
            this.router.navigate(['home']);
        }
    }

    close(reason: string) {
        this.sidenav.close();
        if (reason !== 'backdrop') {
            this.router.navigate([reason]);
        }
    }
}
