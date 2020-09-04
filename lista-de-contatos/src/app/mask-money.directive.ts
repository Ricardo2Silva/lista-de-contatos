import { Directive, HostListener, OnInit, Input, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { take, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[maskMoney]',
    // providers: [NgModel]
})
export class MaskMoneyDirective implements OnInit, OnDestroy {

    previousValue: string;

    @Input()
    maskMoney: MaskMoneyOption;

    private subscription = new Subscription();

    // constructor(private ngModel: NgModel) {}

    ngOnInit() {
        this.maskMoney = {
            decimal: this.maskMoney.decimal !== undefined ? this.maskMoney.decimal : 2,
            integerDivisor: this.maskMoney.integerDivisor ? this.maskMoney.integerDivisor : '.',
            decimalDivisor: this.maskMoney.decimalDivisor ? this.maskMoney.decimalDivisor : ',',
            numbersByDivisor: this.maskMoney.numbersByDivisor !== undefined ? this.maskMoney.numbersByDivisor : 3,
            numbersLimiter: this.maskMoney.numbersLimiter ? this.maskMoney.numbersLimiter : Infinity,
            maxValue: this.maskMoney.maxValue ? this.maskMoney.maxValue : Infinity,
            allowZero: this.maskMoney.allowZero ? this.maskMoney.allowZero : false
        };

        // this.subscription = this.ngModel.valueChanges
        //     .pipe(take(1), filter(value => value !== undefined))
        //     .subscribe({
        //         next: (modelValue: any) => {
        //             const value = typeof modelValue === 'number' ? modelValue.toFixed(this.maskMoney.decimal) : modelValue;
        //             this.input(value);
        //         }
        //     });
    }

    @HostListener('input', ['$event'])
    input(event) {
        let value = event.target ? event.target.value : event;
        console.log(value);
        if (value === '') {
            // this.ngModel.control.setValue(value);
            return;
        }

        value = this._holdJustNumbers(value);

        if (this.isMaxIntValueReached(value)) {
            value = value.substr(0, value.length - 1);
        }

        while (value.charAt(0) === '0') {
            value = value.substr(1);
        }

        if (this.maskMoney.allowZero && !value) {
            value = '0';
        }

        if (!this.maskMoney.allowZero && !value) {
            // this.ngModel.control.setValue(value);
            return;
        }

        const decimalValue = this.getDecimalValue(value);

        if (decimalValue) {
            const token = decimalValue.split(this.maskMoney.decimalDivisor);

            if (token[0].length > this.maskMoney.numbersByDivisor) {
                token[0] = this.getIntValue(token[0]);
                value = token.join(this.maskMoney.decimalDivisor);
            } else {
                value = decimalValue;
            }

        } else if (value.length > this.maskMoney.numbersByDivisor) {
            value = this.getIntValue(value);
        }

        value = this._getValueFromCheckMaxValue(value);

        // this.ngModel.control.setValue(value);
    }

    private getDecimalValue(value: string): string {
        if (this.maskMoney.decimal) {
            if (value.length <= this.maskMoney.decimal) {
                return '0' + this.maskMoney.decimalDivisor + '0'.repeat(this.maskMoney.decimal - value.length) + value;

            } else {
                return value.substr(0, value.length - this.maskMoney.decimal) + this.maskMoney.decimalDivisor + value.substr(value.length - this.maskMoney.decimal);
            }
        }
        return '';
    }

    private getIntValue(value: string): string {
        let dif = 0;
        let left = '';
        const chunks: string[] = [];
        let multiplier = Math.floor(value.length / this.maskMoney.numbersByDivisor);

        if (multiplier) {
            dif = value.length - (multiplier * this.maskMoney.numbersByDivisor);
        }

        if (dif) {
            left = value.substr(0, dif) + this.maskMoney.integerDivisor;
            value = value.substr(dif);
        }

        while (multiplier) {
            chunks.push(value.substr(0, this.maskMoney.numbersByDivisor));
            value = value.substr(this.maskMoney.numbersByDivisor);
            multiplier--;
        }

        return left + chunks.join(this.maskMoney.integerDivisor);
    }

    private isMaxIntValueReached(value: string): boolean {
        return value.length > this.maskMoney.numbersLimiter;
    }

    private _getValueFromCheckMaxValue(value: string) {
        let token = value.split(this.maskMoney.decimalDivisor);
        const v = this._holdJustNumbers(token[0]);
        const n = parseInt(v);

        if (n <= this.maskMoney.maxValue) {
            this.previousValue = value;
            return value;
        }

        return this.previousValue;
    }

    private _holdJustNumbers(value: string): string {
        return value.replace(/[^0-9]+/g, '');
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

export interface MaskMoneyOption {
    decimal?: number;
    numbersLimiter?: number;
    maxValue?: number;
    integerDivisor?: string;
    decimalDivisor?: string;
    numbersByDivisor?: number;
    allowZero?: boolean;
}
