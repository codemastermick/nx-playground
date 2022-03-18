import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@playground/database';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private db: DatabaseService) {}

  private async getID(name: string): Promise<string> {
    return (await this.db.users.findFirst({ where: { name } })).id;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.db.users.create({
      data: {
        name: createUserDto.name,
        password: createUserDto.password,
        avatarURL: '',
      },
    });
  }

  async findAll(): Promise<User[]> {
    return await this.db.users.findMany();
  }

  async findOne(name: string): Promise<User> {
    return await this.db.users.findFirst({ where: { name } });
  }

  async update(name: string, updateUserDto: UpdateUserDto): Promise<User> {
    return await this.db.users.update({
      where: { id: await this.getID(name) },
      data: {
        name: updateUserDto.name,
        password: updateUserDto.password,
        avatarURL: updateUserDto.avatarURL,
      },
    });
  }

  async remove(name: string): Promise<User> {
    return await this.db.users.delete({
      where: { id: await this.getID(name) },
    });
  }
}
