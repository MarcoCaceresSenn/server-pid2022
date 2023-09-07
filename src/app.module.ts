import { EnvironmentModule } from '@core/environment';
import { ProbabilityModule } from '@features/probability';
import { DistributionModule } from '@features/distributions';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentModule, ProbabilityModule, DistributionModule],
  providers: [Logger],
})
export class AppModule {}
