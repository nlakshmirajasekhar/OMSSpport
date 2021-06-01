import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbarcomponent',
  templateUrl: './navbarcomponent.component.html',
  styleUrls: ['./navbarcomponent.component.css']
})
export class NavbarcomponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  makechange(str: string) {
    switch (str) {
      case 'dash':
        this.router.navigateByUrl('dashboard');
        break;

      case 'vendor':
        this.router.navigateByUrl('vendor');
        break;
      case 'items':
        this.router.navigateByUrl('items');
        break;
      case 'clients':
        this.router.navigateByUrl('clients');
        break;



    }
  }
}
