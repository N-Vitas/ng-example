import { Component, OnInit } from '@angular/core';
import { TodosService, Todo } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private loading: boolean = true;
  private search: string = '';

  constructor(private todoService: TodosService) { 
    this.stop = this.stop.bind(this);
  }

  ngOnInit() {
    this.todoService.fetchTodo().subscribe(this.stop,this.stop);
  }

  onChange(todo: Todo) {
    todo.done = !todo.done
    this.todoService.onToggle(todo).subscribe();
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo).subscribe();
  }

  stop() { this.loading = false; };

  start() { this.loading = true; };
}
