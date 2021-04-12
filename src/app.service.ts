import { Injectable } from '@nestjs/common';
import { Cat } from './app.interfaces';


@Injectable()
export class CatsService {

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
}
