import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const routes: Routes = [
    {
        path: '', 
        component: HomeComponent
    }
];
@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
