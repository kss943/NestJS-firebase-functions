import { Module } from '@nestjs/common';
import { CatListModule } from './cat-list/cat-list.module';


@Module({
  imports: [CatListModule],
  controllers: [],
  providers: [],
})
export class ApplicationModule {}
