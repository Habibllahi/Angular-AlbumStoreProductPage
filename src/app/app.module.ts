import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductService } from './product.service';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'products',
    component: ProductListComponent
  },
  {
    path:'product/:id',
    component: ProductPageComponent
  },
  {
    path:'',
    redirectTo: 'products',
    pathMatch: 'full'
  }
]
@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductPageComponent,
    ProductTracklistingComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: ProductService,
      useClass: ProductService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
