import { Injectable } from '@nestjs/common';
import { factorial } from '../binomial-distribution/utils/factorial.service';
import { HypergeometricDistributionResponseDto } from './dto/hypergeometric-distribution-response';

@Injectable()
export class HypergeometricDistributionService {
  calculateProbability(
    N: number,
    K: number,
    n: number,
    k: number,
  ): HypergeometricDistributionResponseDto {
    // Fórmula de la distribución hipergeométrica:
    // P(X=k) = (combinatoria(K, k) * combinatoria(N-K, n-k)) / combinatoria(N, n)
    const numerador = this.combinatoria(K, k) * this.combinatoria(N - K, n - k);
    const denominador = this.combinatoria(N, n);

    const probabilityValue = numerador / denominador;
    return { probability: probabilityValue };
  }

  private combinatoria(n: number, k: number): number {
    return factorial(n) / (factorial(k) * factorial(n - k));
  }
}
