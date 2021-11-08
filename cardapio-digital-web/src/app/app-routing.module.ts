import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

const routes: Routes = [
    {
        path: '',
        component: ToolbarComponent,
        children: [
            {
                path: 'cardapio',
                loadChildren: () => import('./modules/cardapio/cardapio.module').then(m => m.CardapioModule)
            }
        ]
    },
    { path: 'mesa', component: AppComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
