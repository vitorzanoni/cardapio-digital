import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        CdkTableModule,
        MatSidenavModule,
        MatSortModule,
        HttpClientModule
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        RouterModule,
        MatTableModule,
        MatCardModule,
        MatInputModule,
        FormsModule,
        MatPaginatorModule,
        MatSelectModule,
        MatDatepickerModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        CdkTableModule,
        MatSidenavModule,
        MatSortModule
    ]
})
export class SharedModule { }
