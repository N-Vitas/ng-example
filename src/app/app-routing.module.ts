import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { MoneyComponent } from './money/money.component';
import { StreamComponent } from './stream/stream.component';
import { GamesComponent } from './games/games.component';
import { IntermapsComponent } from './intermaps/intermaps.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'games', component: GamesComponent},
  { path: 'todo', component: TodosComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'money', component: MoneyComponent },
  { path: 'maps', component: IntermapsComponent },
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