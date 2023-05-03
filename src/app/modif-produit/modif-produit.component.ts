import { Component, OnInit } from '@angular/core';
import {Produit} from "../../../shared/produit";
import {ProduitService} from "../services/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css']
})
export class ModifProduitComponent implements OnInit {
  p: Produit = new Produit();
  id: string;
  constructor(private route: ActivatedRoute, private ProdServ: ProduitService , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ProdServ.GetProduit(this.id).subscribe(data => this.p = data);
  }
  modifProduit(): void{
    this.ProdServ.UpdateProduit(this.id, this.p).subscribe(
      data => this.router.navigate(['/connection']));
  }
  }

