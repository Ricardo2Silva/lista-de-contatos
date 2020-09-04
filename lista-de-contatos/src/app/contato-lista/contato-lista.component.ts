import { Contato } from './../model/contato.model';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetalheModalComponent } from '../detalhe-modal/detalhe-modal.component';
import { ActivatedRoute } from '@angular/router';
import { FiltroContato } from '../model/filtro-contato.model';


@Component({
    selector: 'contato-lista',
    templateUrl: 'contato-lista.component.html',
    styleUrls: ['contato-lista.component.scss']
})
export class ContatoListaComponent implements OnInit{
    
    contatos: Contato[];
    
    @Output() 
    alterarContato = new EventEmitter();
  
    constructor(private contatoService: ContatoService, private dialog: MatDialog) {

    }

    ngOnInit()  {
        this.contatoService.getContato().subscribe(data => this.contatos = data);
       
    }
    onContatoHandler(filtro) {
        if (filtro.filter === 'Nome') {
            this.contatoService.getContatoNome(filtro.value).subscribe(data => this.contatos = data);
        }
        if (filtro.filter === 'Valor') {
            this.contatoService.getContatoValor(filtro.value).subscribe(data => this.contatos = data);
        }
    }
    onContatoTipoHandler(filtro) {
       
        this.contatoService.getContatoPorTipo(filtro.filtroTipo).subscribe(data => this.contatos = data);
        
    }
  
  

    deletarContato(id) {
        this.contatoService.deletarContato(id).subscribe(
            data =>  this.contatoService.getContato().subscribe(resp => this.contatos = resp)
        );
      
    }
    
    atualizarContato(contato) {
        this.alterarContato.emit(contato);
       
    }

    openDialog(contato: Contato) {
        const config = new MatDialogConfig();
        config.width = '40%';
        config.height = 'auto';
        config.data = contato;

        const dialogRef = this.dialog.open(DetalheModalComponent, config);

        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
    }

}
