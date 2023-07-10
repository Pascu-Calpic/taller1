/* eslint-disable prettier/prettier */
import { Schema } from 'mongoose';

export const NotaSchema = new Schema({
  nombre: String,
  identificacion: String,
  descripcion: String,
  nivel: Number,
  numero_credito: Number,
});
