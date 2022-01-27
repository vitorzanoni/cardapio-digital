import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }
