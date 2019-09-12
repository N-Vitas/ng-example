import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodosFilterPipe } from './shared/todos-filter.pipe';
import { MoneyComponent } from './money/money.component';
import { MoneyPipe } from './shared/money.pipe';
import { StreamComponent } from './stream/stream.component';
import { GamesComponent } from './games/games.component';
import { CardComponent } from './games/card/card.component';
import { IntermapsComponent } from './intermaps/intermaps.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    TodosFilterPipe,
    MoneyComponent,
    MoneyPipe,
    StreamComponent,
    GamesComponent,
    CardComponent,
    IntermapsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
