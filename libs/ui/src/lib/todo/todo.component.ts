import { Component, Input } from '@angular/core';
import { ITodo } from '@playground/todos';

@Component({
  selector: 'playground-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  @Input()
  todo?: ITodo;
  editingContents: boolean;

  constructor() {
    this.todo = undefined;
    this.editingContents = false;
  }

  toggleEdit() {
    setTimeout(() => {
      this.editingContents = !this.editingContents;
      if (this.editingContents) {
        document.getElementById('contentInput')?.focus();
      }
    }, 100);
  }
}
