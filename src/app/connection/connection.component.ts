import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/produit";
import {ProduitService} from "../services/produit.service";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  produits: Produit[];
  constructor(private prodServ: ProduitService) { }

  ngOnInit(): void {
    this.loadProduits();
  }
  private loadProduits(): void {
    this.prodServ.listProduits().subscribe(data => this.produits = data,
      error => console.log(error)
    );
  }
  supprimerProduit(id: string): void{
    this.prodServ.DelateProduit(id).subscribe();
  }

}
