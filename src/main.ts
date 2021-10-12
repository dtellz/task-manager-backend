import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3001;
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //we need to enable cors in order to all from localhost to localhost
  await app.listen(port);
  console.log(`Server running @${port} `)
}
bootstrap();
