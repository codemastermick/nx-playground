import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@playground/database';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(private db: DatabaseService) {}

  async create(createTodoDto: CreateTodoDto) {
    return await this.db.todos.create({
      data: {
        contents: createTodoDto.contents,
        done: false,
      },
    });
  }

  async findAll() {
    return await this.db.todos.findMany();
  }

  async findOne(id: string) {
    return await this.db.todos.findFirst({ where: { id } });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return await this.db.todos.update({
      where: { id },
      data: {
        contents: updateTodoDto.contents,
        done: updateTodoDto.done,
      },
    });
  }

  async remove(id: string) {
    return await this.db.todos.delete({ where: { id } });
  }
}
