import { NgModule } from '@angular/core';
import { ContatoListaComponent } from './contato-lista/contato-lista.component';
import { MaterialModule } from './material.module';
import { ContatoFiltroComponent } from './contato-filtro/contrato-filtro.component';
import { CommonModule } from '@angular/common';
import { DetalheModalComponent } from './detalhe-modal/detalhe-modal.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ContatoCadastroComponent } from './contato-cadastro/contato.cadastro.component';
import { TelefonePipe } from './pipes/telefone.pipe';
import { TelefoneMaskDirective } from './directives/telefone.directive';

@NgModule({
    declarations: [
        ContatoListaComponent,
        ContatoFiltroComponent,
        DetalheModalComponent,
        ContatoCadastroComponent,
        TelefonePipe,
        TelefoneMaskDirective
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        Ng2SearchPipeModule,
      
    ],
    exports: [
        ContatoListaComponent,
        ContatoFiltroComponent
    ],
    entryComponents: [DetalheModalComponent]
})
export class ContatoModule {

}
