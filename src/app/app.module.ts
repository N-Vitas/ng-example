import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
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
import { CardComponent } from './games/components/card/card.component';
import { IntermapsComponent } from './intermaps/intermaps.component';
import { ProductsComponent } from './products/products.component';
import { SearchPipe } from './products/search.pipe';
import { NavigationsPipe } from './products/navigations.pipe';
import { MapsComponent } from './maps/maps.component';
import { HourceComponent } from './hource/hource.component';
import { ExampleComponent } from './games/components/example/example.component';
import { HomeComponent } from './games/components/home/home.component';
import { SimpleComponent } from './simple/simple.component';
import { SketchDirective } from './simple/sketch.directive';

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
    IntermapsComponent,
    ProductsComponent,
    SearchPipe,
    NavigationsPipe,
    MapsComponent,
    HourceComponent,
    ExampleComponent,
    HomeComponent,
    SimpleComponent,
    SketchDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
