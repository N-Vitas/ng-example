import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Products } from './products.interfase';
import { SearchPipe } from './search.pipe';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  private products: Products;
  private view: string = 'shiny';
  private views: string[] = ['shiny', 'disk', 'battery', 'oil'];
  private productSearch: string = '';
  private page: number = 0;
  private limit: number = 5;
  constructor(private http: HttpClient) { }
  fetch(): Observable<Products> {
    return this.http.get<Products>(url)
    .pipe(
      map(data => {
        data.shiny = data.shiny.map(item => ({...item, article: item['1c_code']}));
        data.disk = data.disk.map(item => ({...item, article: item['1c_code_disk']}));
        return data;
      })
    );
  }
  ngOnInit() {
    this.fetch().subscribe(products => {
      this.products = products;
    });
  }
  toggleTab(view: string) {
    this.view = view;
  }
  getPages() {
    if(this.productSearch.length == 0) {
      return this.products[this.view].length;
    }
    const searchPipe = new SearchPipe();
    const search = searchPipe.transform(this.products[this.view], this.productSearch);
    return search.length;

  }
  back() {
    if(this.page <= this.limit) {
      this.page = 0;
    } else {
      this.page = this.page - this.limit;
    }
  }
  next() {
    if(this.page > this[`total_${this.view}`]) {
      return;
    }
    this.page = this.page + this.limit;
  }

}
