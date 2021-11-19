import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Album } from './types/album';

@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';
  constructor(private _http: HttpClient, private response: Response) { }

  public getAlbum(id: number){
    return this._http.get<Album>(this._albumUrl);
  }
}
