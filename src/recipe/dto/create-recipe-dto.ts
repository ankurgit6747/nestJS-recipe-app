import { IsArray, IsMilitaryTime, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRecipeDTO {

  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  @IsArray()
  ingredients: string[];

  @IsNotEmpty()
  @IsArray()
  instructions: string[];

  @IsNumber()
  @IsNotEmpty()
  servings: number;

  // add time in "30:00" format
  @IsMilitaryTime()
  duration: Date;
}