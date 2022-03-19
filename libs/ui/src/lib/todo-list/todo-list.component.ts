import { Component, Input } from '@angular/core';
import { Todo } from '@playground/todos';

@Component({
  selector: 'playground-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input()
  todos: Todo[];
  hideCompleted: boolean;
  newItem: string;

  constructor() {
    this.todos = [];
    this.hideCompleted = false;
    this.newItem = '';
  }

  removeCompleted() {
    //TODO delete elements from database
    // const done = this.todos.filter((todo: Todo) => todo.done);
    // for (let i = 0; i < done.length; i++) {
    //   const element = done[i];
    // }
    this.todos = this.todos.filter((todo: Todo) => !todo.done);
  }

  addItem() {
    //TODO add new item to database
    this.todos.push({
      id: this.todos.length.toString(),
      contents: this.newItem,
      done: false,
    });
    this.newItem = '';
  }
}
