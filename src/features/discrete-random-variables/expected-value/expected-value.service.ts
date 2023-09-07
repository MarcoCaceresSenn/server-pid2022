import { Injectable } from '@nestjs/common';
import { Big } from 'big.js';
import { ProbabilityUtils } from 'src/features/probability/shared/utils/probability.utils';

type DiscreteRandomVariable = {
  value: number;
  probability: number;
}[];

@Injectable()
export class ExpectedValueService {
  calculateExpectedValue(variable: DiscreteRandomVariable): number {
    let expectedValue = new Big(0);

    for (const item of variable) {
      const normalizedProbability = new Big(
        ProbabilityUtils.normalize(item.probability),
      );
      expectedValue = expectedValue.plus(
        new Big(item.value).times(normalizedProbability),
      );
    }

    return expectedValue.toNumber();
  }
}
