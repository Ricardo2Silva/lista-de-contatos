import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoFiltroComponent } from './contato-filtro/contrato-filtro.component';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { ContatoCadastroComponent } from './contato-cadastro/contato.cadastro.component';


const routes: Routes = [
    {path: 'cadastro', component: ContatoCadastroComponent, pathMatch: 'full'},
    {path: 'filtro', component: ContatoFiltroComponent},
    {path: 'lista', component: ContatoListaComponent},
    {path: '**', component: ContatoCadastroComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 
})
export class AppRoutingModule {

}
