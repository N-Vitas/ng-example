import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { MoneyComponent } from './money/money.component';
import { StreamComponent } from './stream/stream.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './games/components/home/home.component';
import { IntermapsComponent } from './intermaps/intermaps.component';
import { ProductsComponent } from './products/products.component';
import { MapsComponent } from './maps/maps.component';
import { HourceComponent } from './hource/hource.component';

const routes: Routes = [
  { path: '', component: GamesComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chess', component: HourceComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'svg', component: IntermapsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }