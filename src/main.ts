import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe);

  SwaggerModule.setup('api', app,
    SwaggerModule.createDocument(app,
      new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('My cats API')
        .setVersion('1.0')
        .addTag('cats')
        .build()
      )
  );
  await app.listen(3000);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
