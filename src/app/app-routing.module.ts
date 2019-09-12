import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { MoneyComponent } from './money/money.component';
import { StreamComponent } from './stream/stream.component';
import { GamesComponent } from './games/games.component';
import { IntermapsComponent } from './intermaps/intermaps.component';

const routes: Routes = [
  { path: '', component: IntermapsComponent },
  { path: 'games', component: GamesComponent},
  { path: 'todo', component: TodosComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'money', component: MoneyComponent },
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