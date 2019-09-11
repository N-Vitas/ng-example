import { Component } from '@angular/core';
import { Todo, TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  title: string = '';

  constructor(private todosService: TodosService) {}

  addTodo() {
    const todo: Todo = {
      id: 0,
      name: this.title,
      done: false,
      date: new Date()
    }

    this.todosService.addTodo(todo).subscribe(() => this.title = '');
  }

}
