import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Product Page';
  public name="Van Vairavan";
  public message ="";

  private sel: any;
      private jobList: any[];
      private positionSelect: any[] = [{
          name: "Social Media Manager",
          position: "Social Media Manager"
      },
      {
          name: "Product Manager",
          position: "Product Manager"
      }]

}
