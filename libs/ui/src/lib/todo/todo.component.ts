import { Component, Input } from '@angular/core';
import { Todo } from '@playground/todos';

@Component({
  selector: 'playground-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input()
  todo?: Todo;
  editingContents: boolean;

  constructor() {
    this.editingContents = false;
  }

  toggleEdit() {
    this.editingContents = !this.editingContents;
  }

  updateContents() {
    if (this.todo) {
      this.toggleEdit();
    }
  }

  toggleDone() {
    if (this.todo) {
      this.todo.done = !this.todo.done;
    }
  }
}
