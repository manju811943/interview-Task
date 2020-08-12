import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   
  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    EmailId : new FormControl(''),
    mobileNo : new FormControl('')

  });

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){}

  signinPage(){
    this.router.navigate(['login'])
  }

}
