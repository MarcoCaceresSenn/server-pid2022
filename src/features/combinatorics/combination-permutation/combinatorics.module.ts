import { Module } from '@nestjs/common';
import { CombinatoricsController } from './combinatorics.controller';
import { CombinatoricsService } from './combinatorics.service';

@Module({
  controllers: [CombinatoricsController],
  providers: [CombinatoricsService],
})
export class CombinatoricsModule {}
