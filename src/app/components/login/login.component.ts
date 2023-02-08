import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

email:String;
password:String;

  constructor() {
    document.body.style.margin = "0";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = "Source Code Pro', monospace";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
    
    this.email='';
    this.password='';

  }


login(){
  console.log('Email: ' +this.email);
  console.log('Password: '+ this.password);
};
  
}
