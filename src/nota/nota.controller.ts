import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { NotaService } from './nota.service';
import { CreateNotaDTO } from './dto/nota.dto';

@Controller('nota')
export class NotaController {
  constructor(private notaService: NotaService) {}

  @Post('/create')
  async createNota(@Res() res, @Body() createNotaDTO: CreateNotaDTO) {
    const nota = await this.notaService.createNota(createNotaDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Nota ingresada',
      nota,
    });
  }

  @Get('/')
  async getNotas(@Res() res) {
    const notas = await this.notaService.getNotas();
    return res.status(HttpStatus.OK).json(notas);
  }

  @Get('/:notaID')
  async getNota(@Res() res, @Param('notaID') notaID) {
    const nota = await this.notaService.getNota(notaID);
    if (!nota) throw new NotFoundException('La nota no existe');
    return res.status(HttpStatus.OK).json(nota);
  }

  @Delete('/delete')
  async deleteNota(@Res() res, @Query('notaID') notaID) {
    const notaDeleted = await this.notaService.deleteNota(notaID);
    if (!notaDeleted) throw new NotFoundException('La nota no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Nota eliminada correctamente',
      notaDeleted,
    });
  }

  @Put('/update')
  async updateNota(
    @Res() res,
    @Body() createNotaDTO: CreateNotaDTO,
    @Query('notaID') notaID,
  ) {
    const updatedNota = await this.notaService.updateNota(
      notaID,
      createNotaDTO,
    );
    if (!updatedNota) throw new NotFoundException('La nota no existe');
    return res.status(HttpStatus.OK).json({
      message: 'Nota actualizada correctamente',
      updatedNota,
    });
  }
}
