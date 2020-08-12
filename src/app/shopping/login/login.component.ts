import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });


  onSubmit(){
    console.log(this.profileForm.value);
    this.router.navigate(['shoppingcomp'])

  }

  signUp(){
    this.router.navigate(['signup'])
  }
}
