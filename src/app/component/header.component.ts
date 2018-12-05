import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filter = [];
  selectedValue: string = '';
  constructor() { }

  ngOnInit() {
      this.filter = [
          {id: 1, Name: "Filter By size"},
          {id: 2, Name: " S"},
          {id: 3, Name: " M"},
          {id: 4, Name: " L"},
          {id: 5, Name: " XL"}
        ]
  }
  //On Select Filter
  selectChangeHandler(event: any) {
    this.selectedValue =  event.target.value;
    console.log(this.selectedValue);
  }
}
