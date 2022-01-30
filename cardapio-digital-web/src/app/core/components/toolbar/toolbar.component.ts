import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(private router: Router, private autenticacao: LoginService) { }

    ngOnInit(): void {
        if (this.autenticacao.logado){
            this.router.navigate(['home']);
        }
        this.router.navigateByUrl('login');
    }

    close(reason: string) {
        this.sidenav.close();
        if (reason !== 'backdrop') {
            this.router.navigate([reason]);
        }
    }
}
