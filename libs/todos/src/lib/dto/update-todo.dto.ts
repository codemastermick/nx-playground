import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  done?: boolean;

  constructor(contents: string, done: boolean) {
    super(contents);
    this.done = done;
  }
}
