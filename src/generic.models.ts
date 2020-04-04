import { IsOptional, IsNotEmpty } from 'class-validator';

export class IGetDto {
  @IsOptional()
  @IsNotEmpty()
  search: string;

  @IsOptional()
  take: number;
  @IsOptional()
  skip: number;
}

export enum Gender {
  male = 'Male',
  female = 'Female',
  other = 'Other'
}