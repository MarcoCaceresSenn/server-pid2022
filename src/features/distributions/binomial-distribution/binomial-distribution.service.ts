import { Injectable } from '@nestjs/common';
import { factorial } from './utils/factorial.service';

@Injectable()
export class BinomialDistributionService {
  calculateProbability(
    numTrials: number,
    probTrialSuccess: number,
    probSuccess: number,
  ): number {
    const combination =
      factorial(numTrials) /
      (factorial(probSuccess) * factorial(numTrials - probSuccess));
    return (
      combination *
      Math.pow(probTrialSuccess, probSuccess) *
      Math.pow(1 - probTrialSuccess, numTrials - probSuccess)
    );
  }
}
