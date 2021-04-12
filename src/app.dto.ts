import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';


export enum CatBreed {
    Persian = 'Persian',
    Tabby = 'Tabby',
    Siamese = 'Siamese',
}

export class CreateCatDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        minimum: 0
    })
    age: number;

    @ApiProperty({
    })
    breed: CatBreed;

    @ApiProperty({
        type: [String]
    })
    alergies: string[]
}

export class UpdateCatDto extends PartialType(CreateCatDto) {}
