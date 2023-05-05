import { BadRequestException, Injectable } from '@nestjs/common';
import { TwoEventsConditionalProbabilityDto } from './model';
import Big from 'big.js';
import { ProbabilityUtils } from '../shared';

@Injectable()
export class ConditionalProbabilityService {
  calculateConditionalProbabilityForTwoEvents({
    eventB,
    intersectionAB,
  }: TwoEventsConditionalProbabilityDto) {
    if (eventB.probability === 0)
      throw new BadRequestException(
        'The probability of event B must be greater than 0',
      );

    // P(A|B) = P(A∩B) / P(B)
    const probabilityOfAGivenB = new Big(intersectionAB.probability).div(
      eventB.probability,
    );

    return {
      probabilityOfAGivenB: ProbabilityUtils.normalize(
        probabilityOfAGivenB.toNumber(),
      ),
    };
  }
}
