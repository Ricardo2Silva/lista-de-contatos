import { TesteDirective } from './minha-primeira-diretiva.directive';
import { MaskMoneyDirective } from './mask-money.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContatoModule } from './contato.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ContatoModule,
    AppRoutingModule
  ],
  providers: [
    MaskMoneyDirective,
    TesteDirective,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
