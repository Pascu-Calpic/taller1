import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNotaDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    identificacion:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;
    

    @IsString()
    @IsNotEmpty()
    nivel:number;

    @IsNumber()
    @IsNotEmpty()
    numero_de_credito: number;
}
