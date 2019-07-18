import { Module } from '@nestjs/common';
import { CatController } from './cat-list.controller';

@Module({
  controllers: [CatController],
})
export class CatListModule {}
