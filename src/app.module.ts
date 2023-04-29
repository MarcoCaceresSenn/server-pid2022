import { EnvironmentModule } from '@core/environment';
import { ProbabilityModule } from '@features/probability';
import { Logger, Module } from '@nestjs/common';

@Module({
  imports: [EnvironmentModule, ProbabilityModule],
  providers: [Logger],
})
export class AppModule {}
