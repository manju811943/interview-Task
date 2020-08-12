import { Component, OnInit } from '@angular/core';
import { ShoppingService } from  '../../service/shopping.service'
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public isqty;
  public products;
  public id;
  public filteredproduct;

  constructor(private service : ShoppingService,
              private router : Router,
    private activatedRoute : ActivatedRoute) { 
      this.activatedRoute.params.subscribe( data=>{
        this.id = data.id
        console.log(this.id);
        
      })
    }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts(){
    this.products = this.service.products
    this.filteredproduct = this.products.filter(ele => (ele.id == this.id))
  }

  AllProduct(){
    console.log("kkkkkkkkkkkkk");
    
    this.router.navigate(['shoppingcomp'])
  }

}
