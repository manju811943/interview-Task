import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../../app/service/shopping.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  public isqty;


  public products;
  constructor(private service : ShoppingService,
    private router : Router) { }

  ngOnInit(): void {
    this.getInfo()
    this.getproducts()
  }


  getInfo(){
    this.service.getInfo().subscribe(data=>{
        console.log(data);
        
    })
  }

 


  getproducts(){
     this.products = this.service.products
     console.log(this.products);

     this.products.forEach(element => {

       if(element.qty !== 0){
          this.isqty = true
       }
       else{
         this.isqty = false
       }

     });
     
  }

  addCart(id){
    console.log('kkkkkkkkkkkkkkkk');
    
    this.router.navigate(['cart',id])

  }

  signinPage(){
    this.router.navigate(['login'])
  }



}
