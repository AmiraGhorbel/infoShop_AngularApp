import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListproduitComponent} from "./listproduit/listproduit.component";
import {ConnectionComponent} from "./connection/connection.component";
import {AjouteAuPanierComponent} from "./ajoute-au-panier/ajoute-au-panier.component";
import {AjoutProduitComponent} from "./ajout-produit/ajout-produit.component";
import {ModifProduitComponent} from "./modif-produit/modif-produit.component";

const routes: Routes = [
    {path: '', component: ListproduitComponent},
  {path: 'listProd', component: ListproduitComponent},
  {path: 'connection', component: ConnectionComponent},
  {path: 'Ajouter au panier/:id', component: AjouteAuPanierComponent},
  {path: 'AjoutProd', component: AjoutProduitComponent},
  {path: 'modifProd/:id', component: ModifProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
