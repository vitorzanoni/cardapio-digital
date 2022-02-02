import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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
        FlexLayoutModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSnackBarModule
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
        MatSortModule,
        FlexLayoutModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSnackBarModule
    ]
})
export class SharedModule { }
