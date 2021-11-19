import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Album } from './album';
import { Product } from './product';


@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  private _productsUrl: string = '../assets/products.json'
  constructor(private _http: HttpClient) { }

  public getAlbum(id: number): Observable<Album>{
    return this._http.get<Album>(this._albumUrl,{
      observe: 'response'
    }).pipe(map(
      (response) => {
         return <Album>response.body;
      }
    ));
  }

  public getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this._productsUrl,{
      observe: 'response'
    }).pipe(map(
      (response) => {
         return <Product[]>response.body;
      }
    ));
  }
}
