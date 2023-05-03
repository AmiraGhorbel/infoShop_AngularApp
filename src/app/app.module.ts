import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import {HttpClientModule} from "@angular/common/http";
import { ConnectionComponent } from './connection/connection.component';
import { AjouteAuPanierComponent } from './ajoute-au-panier/ajoute-au-panier.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './modif-produit/modif-produit.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ListproduitComponent,
    ConnectionComponent,
    AjouteAuPanierComponent,
    AjoutProduitComponent,
    ModifProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
