import { Module } from '@nestjs/common';
import { NotaController } from './nota.controller';
import { NotaService } from './nota.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaSchema } from './schemas/nota.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Nota', schema: NotaSchema }])],
  controllers: [NotaController],
  providers: [NotaService],
})
export class NotaModule {}
