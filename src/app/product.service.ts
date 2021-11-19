import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map} from 'rxjs';
import { Album } from './album';


@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  constructor(private _http: HttpClient) { }

  public getAlbum(id: number): Observable<Album>{
    return this._http.get<Album>(this._albumUrl,{
      observe: 'response'
    }).pipe(map(
      (response) => {
         return <Album>response.body
      }
    ));
  }
}
