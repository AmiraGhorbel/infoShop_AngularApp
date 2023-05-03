import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/produit";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajoute-au-panier',
  templateUrl: './ajoute-au-panier.component.html',
  styleUrls: ['./ajoute-au-panier.component.css']
})
export class AjouteAuPanierComponent implements OnInit {

  produits : Produit[];
  p: Produit = new Produit();
  id: string;
  constructor(private route: ActivatedRoute,private ProdServ: ProduitService , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  this.ProdServ.GetProduit(this.id).subscribe(data => this.p = data);
}


}
