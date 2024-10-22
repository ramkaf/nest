import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import bodyParser from 'body-parser'
import { ValidationPipe } from '@nestjs/common';
import {DocumentBuilder , SwaggerModule} from '@nestjs/swagger'
import { from } from 'rxjs';
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    forbidNonWhitelisted : true,
    transform : true
  })); 
  const config = new DocumentBuilder()
  .setTitle('nestJS API')
  .setDescription('use the base api url as https://localhost:3000')
  .setTermsOfService('https://localhost:3000/terms-of-service')
  .setLicense('MIT licence' , 'https://github.com/ramkaf/nest.git') 
  .addServer('https://localhost:3000')
  .setVersion('1.0').build()
  const document = SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api' , app , document)
  await app.listen(3000)
}
bootstrap()
