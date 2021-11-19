import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {
  public albumInfo: Album = {
    coverImage: '',
    name: '',
    releaseDate: '',
    tracks: []
  }
  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response)
  }

}
