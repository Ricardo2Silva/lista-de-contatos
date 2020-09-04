import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[teste]'
})
export class TesteDirective {


    @HostListener('input', ['$event'])
    input(event){
        let value = event.target ? event.target.value : event;

        if(value){
            alert(`Seja bem vindo ${value}`)
        }
    }
}