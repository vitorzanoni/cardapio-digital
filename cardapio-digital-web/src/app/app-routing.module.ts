import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        component: ToolbarComponent,
        children: [
            {
                path: 'home',
                loadChildren: () => import('./core/core.module').then(m => m.CoreModule)
            },
            {
                path: 'cardapio',
                loadChildren: () => import('./modules/cardapio/cardapio.module').then(m => m.CardapioModule)
            },
            {
                path: 'carrinho',
                loadChildren: () => import('./modules/carrinho/carrinho.module').then(m => m.CarrinhoModule)
            }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
