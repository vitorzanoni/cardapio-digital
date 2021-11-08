import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ErrorsModule { }
