/* eslint-disable prettier/prettier */
import { Document } from 'mongoose';

export interface Nota extends Document {
  readonly nombre: string;
  readonly identificacion: string;
  readonly descripcion: string;
  readonly nivel: number;
  readonly numero_credito: number;
}
