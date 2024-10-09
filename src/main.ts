import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import process from 'node:process';

/**
 * Gets the cors origin to respect the expressjs cors which is behind scenes in NestJs
 * @return Array[string]
 * @link https://github.com/expressjs/cors#configuration-options
 */
export const getCORSConfig = () => {
  const CORS_ALLOW_ORIGIN = process.env.CORS_ALLOW_ORIGIN;
  const ALLOWED_ORIGINS = CORS_ALLOW_ORIGIN.split(',');
  return ALLOWED_ORIGINS;
};

const SERVER_PORT_LISTENING = process.env.SERVER_PORT_LISTENING;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    logger: ['error', 'warn', 'log'],
    cors: {
      origin: getCORSConfig(),
      credentials: true,
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  app.enableCors();
  const microservice = app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_CONNECTION_URL],
      queue: process.env.RABBITMQ_QUEUE_NAME,
      prefetchCount: 20,
      isGlobalPrefetchCount: true,
      queueOptions: {
        durable: true,
      },
    },
  });

  const config = new DocumentBuilder()
    .setTitle('Notification worker service API')
    .setDescription('Service to manage notifications related to a user')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);
  await app.startAllMicroservices();
  await app.listen(SERVER_PORT_LISTENING);
}
bootstrap();
