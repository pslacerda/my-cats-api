import { Body, Controller, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { stringify } from 'json5';
import { assert } from 'node:console';
import { CreateCatDto, UpdateCatDto } from './app.dto';
import { CatsService } from './app.service';
import { Cat } from './app.interfaces';


@Controller('cats')
export class CatsController {

  constructor(private catService: CatsService) {}

  @Put()
  create(@Body() body: CreateCatDto): Cat {
    this.catService.create(body);
    return body;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() body: UpdateCatDto): string {
    return stringify(body);
  }
}