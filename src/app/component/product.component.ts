import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';


@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  // public hasError = false;
  public greeting = "";
  public salecolors = ["red", "green", "yellow"];
  @Input() public parentData;
  @Output() childEvent = new EventEmitter();

  // public isSale = true;
  // public specialClass = {
  //   "test-sale": this.isSale
  // }

    filter = [];

  public products = [];
  selectedValue: string = '';
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(data => this.products = data );

      this.filter = [
          {id: 1, Name: "Filter By size"},
          {id: 2, Name: " Filter Price - Low to High"},
          {id: 3, Name: " Filter Price - High to Low"}

        ]
  }
  selectChangeHandler(event: any) {
    this.selectedValue =  event.target.value;
  }
  onClick() {
    //console.log("Item added to CART");
    this.greeting = "Welcome to Womens Tops";
  }
  fireEvent() {
    this.childEvent.emit('Hey Womens tops');
  }
}
