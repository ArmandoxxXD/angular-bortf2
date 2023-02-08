import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userName:String;
  email:String;
  password:String;
  confirmpassword:String;

  constructor() { 
    this.userName='';
    this.email='';
    this.password='';
    this.confirmpassword='';

    document.body.style.margin = "0";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.fontFamily = "Source Code Pro', monospace";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
    document.body.style.marginBottom="100px";
  }

  ngOnInit(): void {
  }

  register(){
    console.log('UserName : ' +this.userName);
    console.log('Email: ' +this.email);
    console.log('Password: '+ this.password);
    console.log('ConfirmPassword : ' +this.confirmpassword);
  };
}
