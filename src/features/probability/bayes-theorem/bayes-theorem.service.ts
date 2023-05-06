import { BadRequestException, Injectable } from '@nestjs/common';
import { BayesTheoremRequestDto, BayesTheoremResponseDto } from './dto';
import Big from 'big.js';
import { ProbabilityUtils } from '../shared';
import { TotalProbabilityService } from '../total-probability';

@Injectable()
export class BayesTheoremService {
  constructor(
    private readonly totalProbabilityService: TotalProbabilityService,
  ) {}

  calculateBayesTheorem({
    desiredIntersection,
    extraIntersections,
  }: BayesTheoremRequestDto): BayesTheoremResponseDto {
    const { totalProbability } =
      this.totalProbabilityService.calculateTotalProbability({
        intersections: [...extraIntersections, desiredIntersection],
      });

    if (totalProbability.raw === 0)
      throw new BadRequestException('Total probability cannot be 0');

    const desiredEventProbability = new Big(
      desiredIntersection.event.probability,
    ).times(desiredIntersection.eventGivenB.probability);

    const probabilityOfOcurrence = desiredEventProbability.div(
      totalProbability.raw,
    );

    return {
      probabilityOfOcurrence: {
        normalized: ProbabilityUtils.normalize(probabilityOfOcurrence),
        raw: probabilityOfOcurrence.toNumber(),
      },
    };
  }
}
