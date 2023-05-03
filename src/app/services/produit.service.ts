import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../../../shared/produit";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  baseurl = 'http://localhost:3000/produit';
  constructor(private http: HttpClient) {
  }

  listProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseurl);
  }
  GetProduit(id): Observable<Produit> {
    return this.http.get<Produit>(this.baseurl + '/' + id);
  }
  AddProduit(p): Observable<Produit>
  {
    return this.http.post<Produit>(this.baseurl, p);
  }
  UpdateProduit(id, p): Observable<Produit>
  {
    return  this.http.put<Produit>(this.baseurl + '/' + id, p);
  }
  AddProduitPanier(id, p): Observable<Produit>
  {
    return this.http.post<Produit>(this.baseurl + '/' + id, p);
  }
  DelateProduit(id): Observable<Produit>
  {
    return this.http.delete<Produit>(this.baseurl + '/' + id);
  }

}
