import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/produit";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {element} from "protractor";
import {types} from "util";

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
produits: Produit[];
  p: Produit = new Produit();
  id: string;

  constructor(private route: ActivatedRoute,private prodServ: ProduitService,private router: Router) { }

  ngOnInit(): void {
    this.loadProduits();
  }
  private loadProduits(): void {
    this.prodServ.listProduits().subscribe(data => this.produits = data,
      error => console.log(error)
    );

  }
  connAdmin(e){
    e.preventDefault();
    console.log(e);
    var adm = e.target.elements[0].value;
    var mdp = e.target.elements[1].value;
    if(adm == 'amira' && mdp == 'amira')
    {
      this.router.navigate(['/connection']);
    }

  }




}
