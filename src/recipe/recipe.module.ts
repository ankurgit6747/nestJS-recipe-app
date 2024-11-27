import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipesService } from './recipe.service';

// note
// services are the provider it can be helper function, factories 
// services are responsible to interact with DB


@Module({
  controllers: [RecipeController],
  providers: [RecipesService]
})
export class RecipeModule {}
