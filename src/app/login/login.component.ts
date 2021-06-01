import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:string='';
  public password:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getauth()
  {
    if(this.username=='admin@gmail.com' && this.password=='pass')
    {
      this.router.navigateByUrl('dashboard');
      return true

    }
    else{
    alert('wrong credentials');
    return false
  }
  }
}
