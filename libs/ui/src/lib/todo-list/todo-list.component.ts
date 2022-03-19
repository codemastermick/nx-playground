import { Component, Input } from '@angular/core';
import { Todo } from '@playground/todos';

@Component({
  selector: 'playground-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  /**
   * The list of Todo items being displayed
   */
  @Input()
  todos: Todo[];
  /**
   * Whether to hide completed items or not
   */
  hideCompleted: boolean;
  /**
   * The text to use for a new item
   */
  newItem: string;

  constructor() {
    this.todos = [];
    this.hideCompleted = false;
    this.newItem = '';
  }

  /**
   * Remove all completed todo items from the list
   */
  removeCompleted() {
    //TODO delete elements from database
    // const done = this.todos.filter((todo: Todo) => todo.done);
    // for (let i = 0; i < done.length; i++) {
    //   const element = done[i];
    // }
    this.todos = this.todos.filter((todo: Todo) => !todo.done);
  }

  /**
   * Add a new item to the list
   */
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
