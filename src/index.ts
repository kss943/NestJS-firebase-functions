import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder } from '@nestjs/swagger';
import {
    NestExpressApplication,
    ExpressAdapter} from '@nestjs/platform-express'
import * as functions from 'firebase-functions';
import * as express from 'express';


const server = express();

const startNestApplication = async (expressInstance) => {
  const app = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
    new ExpressAdapter(expressInstance));

  const options = new DocumentBuilder()
    .setTitle('Title')
    .setDescription('Description')
    .setVersion('4.59')
    .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

  await app.init();
}


startNestApplication(server)

export const ExpressNestAPI = functions.https.onRequest(server)
