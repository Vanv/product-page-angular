import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header.component';
import { ProductComponent } from './component/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { SelectboxPipe } from './selectbox.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    SelectboxPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
        SelectboxPipe
    ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
