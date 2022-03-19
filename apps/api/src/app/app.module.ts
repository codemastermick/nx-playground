import { Module } from '@nestjs/common';
import { TodosModule } from '@playground/todos';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
