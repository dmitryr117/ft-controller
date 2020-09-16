import { IsString, IsOptional } from 'class-validator';

export class ExchangeSetupDto {
  @IsString()
  exchange_name: string;

  @IsString()
  exchange_url: string;

  @IsString()
  exchange_key: string;
}
