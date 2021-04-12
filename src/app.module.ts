import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';
import { CatsService } from './app.service';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule {}
