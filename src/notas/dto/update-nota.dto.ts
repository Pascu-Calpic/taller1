import { PartialType } from '@nestjs/mapped-types';
import { CreateNotaDto } from './create-nota.dto';
import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';


export class UpdateNotaDto extends PartialType(CreateNotaDto) {


    @IsBoolean()
    @IsOptional()
    estado?: boolean;
}
