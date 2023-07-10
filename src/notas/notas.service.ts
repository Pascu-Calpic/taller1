import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { UpdateNotaDto } from './dto/update-nota.dto';
import { Nota } from './entities/nota.entity';

@Injectable()
export class NotasService {

  private notas: Nota[]=[
    {id:1, nombre:'Marcos', identificacion:'1' , descripcion:'Estudiante regular', nivel: 8, numero_de_credito: 48, estado:true},
    {id:2, nombre:'Juam', identificacion:'2' , descripcion:'Estudiante regular', nivel: 8, numero_de_credito: 48, estado:true},
  ]

  create(createNotaDto: CreateNotaDto) {
    const nota = new Nota();
    nota.id=  Math.max( ... this.notas.map(elemento => elemento.id),0 )+1 ;
    nota.nombre= createNotaDto.nombre;
    nota.identificacion= createNotaDto.identificacion;
    nota.descripcion= createNotaDto.descripcion;
    nota.nivel= createNotaDto.nivel;
    nota.numero_de_credito= createNotaDto.numero_de_credito;
    this.notas.push(nota);
    return nota;
  }

  findAll() : Nota[] {
    return this.notas;
  }

  findOne(id: number) {
    const nota =  this.notas.find(nota=> nota.id===id);
    if (!nota) throw new NotFoundException(`ID ${id} not found`)
    return nota;
  }

  update(id: number, updateNotaDto: UpdateNotaDto) {
    const { identificacion, nombre, descripcion, nivel, numero_de_credito, estado   } = updateNotaDto;
    const nota = this.findOne(id);
    if (nombre) nota.nombre= nombre;
    if (descripcion) nota.descripcion= descripcion;
    if (nivel) nota.nivel= nivel;
    if (numero_de_credito) nota.numero_de_credito= numero_de_credito;
    if (estado!= undefined) nota.estado= estado;

    this.notas =  this.notas.map( elemento=> {
      if (elemento.id===id) return nota;
      return elemento;
    } )

    return nota;

  }

  remove(id: number) {
    this.findOne(id);
    this.notas =  this.notas.filter(elemento=> elemento.id!== id);
  }
}
