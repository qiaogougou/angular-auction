import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;

  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  // when component initialized, call this function
  ngOnInit() {
    this.products = [
      new Product(1, "Angular First", 1.99, 3.5, "This is my first Angular product.", ["Electronic", "Software"]),
      new Product(2, "Angular First", 2.99, 3, "This is my first Angular product.", ["Electronic", "Software"]),
      new Product(3, "Angular First", 3.99, 2.5, "This is my first Angular product.", ["Software"]),
      new Product(4, "Angular First", 4.99, 4.5, "This is my first Angular product.", ["Electronic", "Software"]),
      new Product(5, "Angular First", 5.99, 2, "This is my first Angular product.", ["Electronic"]),
      new Product(6, "Angular First", 16.99, 1, "This is my first Angular product.", ["Electronic", "Hardware"]),
    ]
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}

