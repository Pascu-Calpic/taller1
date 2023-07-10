import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Nota } from './interfaces/nota.interface';
import { CreateNotaDTO } from './dto/nota.dto';

@Injectable()
export class NotaService {
  constructor(@InjectModel('Nota') private readonly notaModel: Model<Nota>) {}

  async getNotas(): Promise<Nota[]> {
    const notas = await this.notaModel.find();
    return notas;
  }

  async getNota(notaID: string): Promise<Nota> {
    const nota = await this.notaModel.findById(notaID);
    return nota;
  }

  async createNota(createNotaDTO: CreateNotaDTO): Promise<Nota> {
    const newNota = new this.notaModel(createNotaDTO);
    return newNota.save();
  }

  async deleteNota(notaID: string): Promise<Nota> {
    const deletedNota = await this.notaModel.findByIdAndDelete(notaID);
    return deletedNota;
  }

  async updateNota(
    notaID: string,
    createNotaDTO: CreateNotaDTO,
  ): Promise<Nota> {
    const updatedNota = await this.notaModel.findByIdAndUpdate(
      notaID,
      createNotaDTO,
      { new: true },
    );
    return updatedNota;
  }
}
