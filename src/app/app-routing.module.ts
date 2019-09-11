import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { MoneyComponent } from './money/money.component';
import { StreamComponent } from './stream/stream.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path: '', component: MoneyComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'games', component: GamesComponent },
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