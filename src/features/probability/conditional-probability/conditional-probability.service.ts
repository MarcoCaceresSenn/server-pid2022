import { Injectable } from '@nestjs/common';
import Big from 'big.js';
import { ProbabilityUtils } from '../shared';
import {
  IndependentEventsConditionalProbabilityRequestDto,
  IndependentEventsConditionalProbabilityResposenDto,
  TwoEventsConditionalProbabilityRequestDto,
  TwoEventsConditionalProbabilityResponseDto,
} from './dto';

@Injectable()
export class ConditionalProbabilityService {
  calculateConditionalProbabilityForTwoEvents({
    eventB,
    intersectionAB,
  }: TwoEventsConditionalProbabilityRequestDto): TwoEventsConditionalProbabilityResponseDto {
    // P(A|B) = P(A∩B) / P(B)
    const probabilityOfAGivenB = new Big(intersectionAB.probability).div(
      eventB.probability,
    );

    return {
      probabilityOfAGivenB: ProbabilityUtils.normalize(probabilityOfAGivenB),
    };
  }

  calculateConditionalProbabilityForIndependentEvents({
    events,
  }: IndependentEventsConditionalProbabilityRequestDto): IndependentEventsConditionalProbabilityResposenDto {
    const probabilityOfOcurrence = events.reduce(
      (accumulatedProbability, event) =>
        accumulatedProbability.times(event.probability),
      new Big(1),
    );

    return {
      probabilityOfOcurrence: ProbabilityUtils.normalize(
        probabilityOfOcurrence,
      ),
    };
  }
}
