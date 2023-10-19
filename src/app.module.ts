import { EnvironmentModule } from '@core/environment';
import { ProbabilityModule } from '@features/probability';
import { DistributionModule } from '@features/distributions';
import { CombinatoricsGeneralModule } from '@features/combinatorics';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [
    EnvironmentModule,
    ProbabilityModule,
    DistributionModule,
    CombinatoricsGeneralModule,
  ],
  providers: [Logger],
})
export class AppModule {}
