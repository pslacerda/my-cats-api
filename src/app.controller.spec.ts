import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: CatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [AppService],
    }).compile();

    appController = app.get<CatsController>(CatsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
