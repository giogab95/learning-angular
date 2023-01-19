import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GetDealsComponent } from './get-deals/get-deals.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';
import { JwtInterceptor } from './interceptor.interceptor';
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
      { path: '', component: LoginComponent },
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
    LoginComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
