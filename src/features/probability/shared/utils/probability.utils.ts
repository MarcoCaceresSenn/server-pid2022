import { Big, BigSource } from 'big.js';

export class ProbabilityUtils {
  static normalize(probability: BigSource): number {
    const normalizedProbability = new Big(probability);

    if (normalizedProbability.gt(1)) return 1;
    if (normalizedProbability.lt(0)) return 0;

    return normalizedProbability.round(4, Big.roundHalfUp).toNumber();
  }
}
