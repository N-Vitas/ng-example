import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
  id: number
  name: string
  done: boolean
  date?: any
}

const options = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
)};
const url = 'http://127.0.0.1:3000/todo'

@Injectable({ providedIn: 'root' })
export class TodosService {
  public todos: Todo[] = [];
  public page: number = 1;

  constructor(private http: HttpClient) {}

  fetchTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${url}?page=${this.page}`, options)
    .pipe(tap(todos => this.todos = todos));
  }
  back() {
    console.log(this.page)
    if(this.page <= 1) { return }
    this.page--
    this.fetchTodo().subscribe();
  }
  next() {
    console.log(this.page)
    if(this.todos.length === 0 || this.todos.length < 25) { return }
    this.page++
    this.fetchTodo().subscribe();
  }
  onToggle(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(url, todo, options)
    .pipe(tap(res => {
      const idx = this.todos.findIndex(t => t.id === res.id);
      this.todos[idx] = res;
    }));
  }
  removeTodo(todo: Todo): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${url}?id=${todo.id}`, options)
    .pipe(tap(() => this.todos = this.todos.filter(t => t.id !== todo.id)));
  }
  addTodo(todo: Todo): Observable<Todo>  {
    return this.http.post<Todo>(url, todo, options)
    .pipe(tap(res => this.todos.push(res)));
    
  }
  generateTodos() {
    for (let i=1; i<50; i++) {
      const t: Todo = { id: 0, name: `Задача ${i}`, date: new Date(), done: false}
      this.addTodo(t).subscribe();
    }
  }
}