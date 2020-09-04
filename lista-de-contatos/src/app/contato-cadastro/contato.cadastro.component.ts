import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato.model';
import { ContatoService } from '../service/contato.service';
import { Router } from '@angular/router';


@Component({
  selector: 'contato-cadastro',
  templateUrl: 'contato-cadastro.component.html',
  styleUrls: ['contato-cadastro.component.scss']

})
export class ContatoCadastroComponent implements OnInit {
  tipoSelected = '';
  title = 'lista-de-contatos';
  contatos: Contato[] = [];
  contato: Contato = {
    id: 0,
    nome: '',
    tipo: 'email',
    valor: ''
  };

  constructor(private contatoService: ContatoService, private router: Router) {
  }

  ngOnInit() {
    this.contatoService.getContato().subscribe(data => {
      this.contatos = data;

    });
  }

  cadastrarContato() {
    if (this.contato.tipo === 'celular' || 
        this.contato.tipo === 'telefone comercial' || 
        this.contato.tipo === 'telefone residencial') {

      this.contato.valor = this._telefoneSanitizer(this.contato.valor);
    }
  
    this.contatoService.criarContato(this.contato).subscribe(data => this.contatos = data);
    
    this.router.navigate(['/lista']);

  }
  onChange(valor) {
    this.contato.valor = valor;
  }
  atualizarContato(contato) {
    this.contato = {
      id: contato.id,
      nome: contato.nome,
      tipo: contato.tipo,
      valor: contato.valor
    };
  }
  private _telefoneSanitizer(valor) {
    return valor.replace(/\D+/g, '');
  }


}