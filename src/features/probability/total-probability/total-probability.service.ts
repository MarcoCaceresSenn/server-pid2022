import { Injectable } from '@nestjs/common';
import { TotalProbabilityResponseDto } from './dto/total-probability-response.dto';
import { TotalProbabilityRequestDto } from './dto';
import Big from 'big.js';
import { ProbabilityUtils } from '../shared';

@Injectable()
export class TotalProbabilityService {
  calculateTotalProbability({
    intersections,
  }: TotalProbabilityRequestDto): TotalProbabilityResponseDto {
    const totalProbability = intersections.reduce(
      (accumulatedProbability, { event, eventGivenB }) => {
        const eventProbability = new Big(event.probability).times(
          eventGivenB.probability,
        );

        return accumulatedProbability.plus(eventProbability);
      },
      new Big(0),
    );

    return {
      totalProbability: {
        normalized: ProbabilityUtils.normalize(totalProbability),
        raw: totalProbability.toNumber(),
      },
    };
  }
}
