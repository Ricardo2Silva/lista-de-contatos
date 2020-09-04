import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[telefoneMask]'
})
export class TelefoneMaskDirective {
    // @Output()
    // onValueChange = new EventEmitter<string>();
    @HostListener('input', ['$event'])
    inputEvent(event: KeyboardEvent) {

        this._eventHandler(event);
    }

    private _eventHandler(event) {

        const input = (event.target as HTMLInputElement);
        let value = input.value;
        value = value.replace(/\D+/g, '');

        if (value.length > 4) {
            value = value.substring(0, 4) + '-' + value.substring(4);
        }
        if (value.length > 9) {
            value = value.replace(/\D+/g, '');
            value = value.substring(0, 1) + ' ' + value.substring(1);
            value = value.substring(0, 6) + '-' + value.substring(6);
        }
        if (value.length > 11) {
            value = value.replace(/\D+/g, '');
            value = '(' + value.substring(0, 1) + value.substring(1, 2) + ')' + value.substring(2);
            value = value.substring(0, 4) + ' ' + value.substring(4);
            value = value.substring(0, 5) + value.substring(5);
            value = value.substring(0, 9) + '-' + value.substring(9);
        }
        if (value.length > 14) {
            value = value.replace(/\D+/g, '');
            value = '(' + value.substring(0, 1) + value.substring(1, 2) + ')' + value.substring(2);
            value = value.substring(0, 4) + ' ' + value.substring(4);
            value = value.substring(0, 6) + ' ' + value.substring(6);
            value = value.substring(0, 11) + '-' + value.substring(11);
        }


        input.value = value;

    }
}