import { Component, Input } from '@angular/core';
import { ITodo } from '@playground/todos';

@Component({
  selector: 'playground-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  /**
  The todo item being displayed by this component
  */
  @Input()
  todo?: ITodo;
  /**
  Whether the contents of the Todo item are being edited or not
  */
  editingContents: boolean;

  constructor() {
    this.todo = undefined;
    this.editingContents = false;
  }

  /**
  Toggles the editing mode on or off, assigning focus to the input field
  */
  toggleEdit() {
    setTimeout(() => {
      this.editingContents = !this.editingContents;
      if (this.editingContents) {
        document.getElementById('contentInput')?.focus();
      }
    }, 100);
  }
}
