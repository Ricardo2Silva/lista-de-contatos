export interface Contato {
    id: number;
    nome: string;
    tipo: 'email' | 'telefone comercial' | 'telefone residencial' | 'celular';
    valor: string | number;
}
