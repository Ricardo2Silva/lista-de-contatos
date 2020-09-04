import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContatoService } from '../service/contato.service';
import { Contato } from '../model/contato.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ignoreElements } from 'rxjs/operators';

@Component({
    selector: 'contato-filtro',
    templateUrl: 'contato-filtro.component.html',
    styleUrls: ['contato-filtro.component.scss']
})

export class ContatoFiltroComponent {

    @Output()
    filtroValores = new EventEmitter();
    @Output()
    filtroValoresTipo = new EventEmitter();
    valorInput = '';
    valorFiltro = 'Nome';
    naoEncontrado = false;
    valorFiltroTipo = 'Selecione...';
    opcoesFiltro = ['Nome', 'Tipo', 'Valor'];
    opcoesFiltroTipo = ['Selecione...', 'email', 'celular', 'telefone comercial', 'telefone residencial'];
    filter = '';
    show = false;
    contato: any = {
        id: 0,
        nome: '',
        tipo: 'email',
        valor: ''
    };
    contatos: Contato[] = [];

    constructor(private contatoservice: ContatoService) { }

    buscarPorFiltro(valor, filtro = this.valorFiltro) {

        const filtroValores = {
            value: valor,
            filter: filtro,
        }
        this.filtroValores.emit(filtroValores);

    }
    buscarPorFiltroTipo(filtro = this.valorFiltro, filtroTipo = this.valorFiltroTipo) {
        const filtroValoresTipo = {
            filtro,
            filtroTipo
        }
        this.filtroValoresTipo.emit(filtroValoresTipo);
    }
    
}
