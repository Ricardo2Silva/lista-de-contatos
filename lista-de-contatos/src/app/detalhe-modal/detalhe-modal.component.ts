import { Contato } from './../model/contato.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'detalhe-modal',
  templateUrl: 'detalhe-modal.component.html',
  styleUrls: ['detalhe-modal.component.scss']
})
export class DetalheModalComponent {
  nome = this.data.nome;
  tipo = this.data.tipo;
  valor = this.data.valor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Contato) {}

}
