import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor(private http : HttpClient ) { }

  products = [

    { "Name": "Cheese", "price" : 2.50, "Location": "Refrigerated foods", qty: 2 , id:1},
    { "Name": "Crisps", "price" : 3, "Location": "the Snack isle", qty: 5 , id:2},
    { "Name": "pizza", "price" : 4, "Location": "Refrigerated foods", qty: 7  , id:3},
    { "Name": "Chocolate", "price" : 1.50, "Location": "the Snack isle", qty: 8 , id:4},
    { "Name": "Self-raising flour", "price" : 1.50, "Location": "Home baking", qty: 0, id:5 },
    { "Name": "Ground almonds", "price" : 3, "Location": "Home baking", qty: 1 , id:6 }
    ]
     
    getInfo() : Observable<any>{
      return this.http.get("https://dev-api.alldaydr.com/")
    }
}
