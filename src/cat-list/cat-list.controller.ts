import { Controller, Get } from '@nestjs/common';


@Controller('Cat')
export class CatController {
  @Get()
  getCats() {
    return 'Cat was here';
  }
}
