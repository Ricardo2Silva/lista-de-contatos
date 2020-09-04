import { Injectable } from '@angular/core';
import { Contato } from '../model/contato.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContatoService {

    constructor(private http: HttpClient) {

    }
    getContato(): Observable<Contato[]> {
        return this.http.get<Contato[]>('http://localhost:3030/contatos');
    }
    criarContato(contato: Contato): Observable<Contato[]> {
        return this.http.post<Contato[]>('http://localhost:3030/contatos', contato);
    }
    deletarContato(id: string): Observable<Contato[]> {
        return this.http.delete<Contato[]>(`http://localhost:3030/contatos/${id}`);
    }
    atualizarContato(contato: Contato): Observable<Contato[]> {
        return this.http.put<Contato[]>(`http://localhost:3030/contatos/editar/${contato.id}`, contato);
    }
    getContatoPorTipo(valor: string): Observable<Contato[]> {
        return this.http.get<Contato[]>(`http://localhost:3030/contatos/tipo/${valor}`);
    }  
    getContatoNome(nome: string): Observable<Contato[]> {
        return this.http.get<Contato[]>(`http://localhost:3030/contatos/nome/${nome}`);
    }

    getContatoValor(valor: string): Observable<Contato[]> {
        return this.http.get<Contato[]>(`http://localhost:3030/contatos/valor/${valor}`);
    } 

}
