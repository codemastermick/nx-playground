import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private client: PrismaClient;
  users: Prisma.UserDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;
  todos: Prisma.TodoDelegate<
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation
  >;

  constructor() {
    this.client = new PrismaClient();
    this.users = this.client.user;
    this.todos = this.client.todo;
  }
  async onModuleInit() {
    await this.client.$connect();
  }
  async onModuleDestroy() {
    await this.client.$disconnect();
  }
}
