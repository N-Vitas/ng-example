import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products, Shiny } from './products.interfase';
import { Observable } from 'rxjs';
import { scan, take, map } from 'rxjs/operators';


const options = {
  headers: new HttpHeaders({
    'Accept': '*/*',
    'Content-Type': 'application/json; charset=utf-8'
  }
)};
const url = 'http://old-mastershina.vitas/incom/modules/shop/products/api/'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  private shiny: Shiny[] = [];
  private search: string = '';
  constructor(private http: HttpClient) { }
  fetchShiny(): Observable<Shiny[]> {
    return this.http.get<Products>(url)
    .pipe(
      map(data => data.shiny.map(item => ({...item, article: item['1c_code']})))
    );
  }
  ngOnInit() {
    this.fetchShiny().subscribe(shiny => {
      this.shiny = shiny
    });
  }

}
