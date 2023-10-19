import { Module } from '@nestjs/common';
import { ExpectedValueService } from './expected-value.service';
import { ExpectedValueController } from './expected-value.controller';

@Module({
  providers: [ExpectedValueService],
  exports: [ExpectedValueService],
  controllers: [ExpectedValueController],
})
export class ExpectedValueModule {}
