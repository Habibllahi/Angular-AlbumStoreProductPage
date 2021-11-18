import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPageComponent } from './product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDescriptionComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
