/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaModule } from './nota/nota.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://pascu:*calpic95@cluster0.yidllmo.mongodb.net/', {
      useNewUrlParser: true
    }),
    NotaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
