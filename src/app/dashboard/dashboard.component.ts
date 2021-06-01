import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public orders:any=[]=[];
  public orderstmp:any=[]=[];
  public search:string='';
  constructor(private router: Router,private http:HttpClient) { 
    this.getitems().subscribe(
      res=>
      {
        this.orders=res;
        this.orderstmp=this.orders;
        console.log(this.orders);

      }
    )
  }

  ngOnInit(): void {
  }
  create()
  {
    this.router.navigateByUrl('create');

  }
  getitems()
  {
    return this.http.get("https://localhost:5001/api/Order/getclients")


  }

}
