import { EnvironmentModule } from '@core/environment';
import { ProbabilityModule } from '@features/probability';
import { CombinatoricsGeneralModule } from '@features/combinatorics';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentModule, ProbabilityModule, CombinatoricsGeneralModule],
  providers: [Logger],
})
export class AppModule {}
