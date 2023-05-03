import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/produit";
import {ProduitService} from "../services/produit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  p: Produit = new Produit();
  constructor(private ProdServ: ProduitService , private router: Router) { }

  ngOnInit(): void {
  }
  ajoutProduit(): void{
    this.ProdServ.AddProduit(this.p).subscribe(
      data => this.router.navigate(['/connection']));
  }

}
