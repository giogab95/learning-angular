import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { GetDealsComponent } from './get-deals/get-deals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    FormsModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent },
      { path: 'deals', component: GetDealsComponent },
      { path: '', component: HomepageComponent },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    TopBarComponent,
    PageNotFoundComponent,
    GetDealsComponent,
    HomepageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
