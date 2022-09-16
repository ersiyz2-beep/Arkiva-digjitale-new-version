import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms"
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,
  private http: HttpClient,
  private router: Router) { }


  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      phone:['']

    })
  }

  signUp(){
    this.http.post<any>("https://localhost:3000/signupUsers", this.signUpForm.value)
      .subscribe(res=> {
        alert("SignUp Sccessfull");
        this.signUpForm.reset();
        this.router.navigate(['login']);
      },error => {
        alert("Something went Wrong");
        this.router.navigate(['login'])
      })
  }
}
