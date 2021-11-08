import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

    @ViewChild('sidenav') sidenav!: MatSidenav;

    constructor(private router: Router) { }

    close(reason: string) {
        this.sidenav.close();
        this.router.navigate(['remessas']);
    }
}
