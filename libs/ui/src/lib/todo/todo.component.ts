import { Component, ElementRef, Input, ViewChild } from '@angular/core';
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
  @ViewChild('contentInput')
  inputEl!: ElementRef;

  constructor() {
    this.todo = undefined;
    this.editingContents = false;
  }

  toggleEdit() {
    this.editingContents = !this.editingContents;
    if (this.editingContents) {
      setTimeout(() => {
        this.inputEl.nativeElement.focus();
      }, 100);
    }
  }
}
