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
    deciredIntersection,
    extraIntersections,
  }: BayesTheoremRequestDto): BayesTheoremResponseDto {
    const { totalProbability } =
      this.totalProbabilityService.calculateTotalProbability({
        intersections: [...extraIntersections, deciredIntersection],
      });

    if (totalProbability.raw === 0)
      throw new BadRequestException('Total probability cannot be 0');

    const deciredEventProbability = new Big(
      deciredIntersection.event.probability,
    ).times(deciredIntersection.eventGivenB.probability);

    const probabilityOfOcurrence = deciredEventProbability.div(
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
