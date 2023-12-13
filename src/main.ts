import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api/v1");



  const config = new DocumentBuilder()
    .setTitle('Money Excjange Developer Document')
    .setDescription('This API REST is used to exchange money in differents countries and entities, they can use the service to maintenance and operate in theire daily work routine.')
    .setVersion('1.0')
    .addTag('moneyexchange')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
