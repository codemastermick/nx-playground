import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TodoComponent, TodoListComponent],
  exports: [TodoComponent, TodoListComponent],
})
export class UiModule {}
