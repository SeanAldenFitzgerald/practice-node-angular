import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grocery } from '../models/grocery';

@Component({
  selector: 'app-groceries-list',
  templateUrl: './groceries-list.component.html',
  styleUrls: ['./groceries-list.component.css']
})
export class GroceriesListComponent implements OnInit {

  private groceries: Grocery[];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.get('http://localhost:3000/shopping-list', httpOptions)
      .subscribe((data: any) => {
        if (data) {
          this.groceries = data;
        } else {
          this.groceries = [];
        }
      });
  }

}
