export class ProbabilityUtils {
  static normalize(probability: number) {
    if (probability > 1) return 1;
    if (probability < 0) return 0;

    return probability;
  }
}
