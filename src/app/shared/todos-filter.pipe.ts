import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todos.service'

@Pipe({ name: "todosFilter"})
export class TodosFilterPipe implements PipeTransform {
    transform(todos: Todo[], search: string = ''): Todo[] {
        if (!search.trim()) {
            return todos;
        }
        return todos.filter(t => t.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    }

}