import { Injectable } from '@nestjs/common';
import { BayesTheoremRequestDto, BayesTheoremResponseDto } from './dto';
import Big from 'big.js';
import { ProbabilisticIntersectionDto, ProbabilityUtils } from '../shared';

@Injectable()
export class BayesTheoremService {
  calculateBayesTheorem({
    deciredIntersection,
    extraIntesections,
  }: BayesTheoremRequestDto): BayesTheoremResponseDto {
    const deciredEventProbability =
      this.calculateProbabilityOfOcurrence(deciredIntersection);

    const extraIntesectionsProbability = extraIntesections.reduce(
      (accumulatedProbability, extraIntersection) => {
        const extraEventProbability =
          this.calculateProbabilityOfOcurrence(extraIntersection);

        return accumulatedProbability.plus(extraEventProbability);
      },
      deciredEventProbability,
    );

    const probabilityOfOcurrence = deciredEventProbability.div(
      extraIntesectionsProbability,
    );

    return {
      probabilityOfOcurrence: ProbabilityUtils.normalize(
        probabilityOfOcurrence,
      ),
    };
  }

  private calculateProbabilityOfOcurrence({
    event,
    eventGivenB,
  }: ProbabilisticIntersectionDto) {
    return new Big(event.probability).times(eventGivenB.probability);
  }
}
