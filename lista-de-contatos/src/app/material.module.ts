import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports: [    
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatInputModule, 
        MatRadioModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatCardModule, 
        MatFormFieldModule, 
        MatSelectModule, 
        MatInputModule, 
        MatRadioModule,
        MatDialogModule
    ]
})
export class MaterialModule { }
