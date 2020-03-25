import { IsOptional, IsNotEmpty } from 'class-validator';

export class GetBorrowerFilterDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;
}