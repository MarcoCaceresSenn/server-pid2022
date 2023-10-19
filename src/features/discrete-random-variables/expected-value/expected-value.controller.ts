import { Body, Controller, Post } from '@nestjs/common';
import { ExpectedValueService } from './expected-value.service';
import { ExpectedValueRequestDto } from './dto/expected-value-response.dto';

@Controller({
  path: 'probability/expected-value',
  version: '1',
})
export class ExpectedValueController {
  constructor(private readonly expectedValueService: ExpectedValueService) {}

  @Post('calculate')
  calculateExpectedValue(
    @Body() expectedValueRequestDto: ExpectedValueRequestDto,
  ) {
    return this.expectedValueService.calculateExpectedValue(
      expectedValueRequestDto.data,
    );
  }
}
