import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'telefone'})
export class TelefonePipe implements PipeTransform {
    transform(telefone: string) {
        
        if (!telefone) { return '';}
        
        if (telefone.length === 8) {
            const tel = telefone.match(/(\d{4})(\d{4})/);
            telefone = tel[1] + '-' + tel[2];

        } else if (telefone.length === 9) {
           const cel = telefone.match(/(\d{1})(\d{4})(\d{4})/);
           telefone = cel[1] + ' ' + cel[2] + '-' + cel[3];

        } else if (telefone.length === 10) {
            const telPrefix = telefone.match(/(\d{2})(\d{4})(\d{4})/);
            telefone = `(${telPrefix[1]}) ${telPrefix[2]}-${telPrefix[3]}`; 
        } else if (telefone.length === 11) {
            const celPrefix =  telefone.match(/(\d{2})(\d{1})(\d{4})(\d{4})/);
            telefone = `(${celPrefix[1]})  ${celPrefix[2]} ${celPrefix[3]}-${celPrefix[4]}`;
        }
        return telefone;
    }
}
