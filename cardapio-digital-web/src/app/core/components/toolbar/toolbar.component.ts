import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.router.navigate(['home']);
    }

    close(reason: string) {
        this.sidenav.close();
        this.router.navigate(['cardapio/insert']);
    }
}
