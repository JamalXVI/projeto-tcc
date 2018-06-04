import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
;
import { AppComponent } from './app.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryModule } from  '@ngx-gallery/core';
import { LightboxModule } from  '@ngx-gallery/lightbox';import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule, MatChipsModule, MatGridListModule, MatCardModule, MatListModule, MatStepperModule,
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ListaComponent } from './lista/lista.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    NavbarComponent,
    CabecalhoComponent,
    ListaComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatStepperModule,
    MatCardModule,
    MatChipsModule,
    MatGridListModule,
    MatListModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    GalleryModule,
    LightboxModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
