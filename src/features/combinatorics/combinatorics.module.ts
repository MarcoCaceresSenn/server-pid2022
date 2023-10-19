import { Module } from '@nestjs/common';
import { CombinatoricsModule } from './combination-permutation';

@Module({
  imports: [CombinatoricsModule],
  exports: [CombinatoricsModule],
})
export class CombinatoricsGeneralModule {}
