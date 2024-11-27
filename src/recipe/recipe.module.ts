import { Module } from '@nestjs/common';
import { RecipeController } from './recipe.controller';
import { RecipesService } from './recipe.service';
import { connection } from 'src/common/constants/connection';

// note
// services are the provider it can be helper function, factories 
// services are responsible to interact with DB


// we can also mock the service from the different source
const mockRecipeService = {
  findAll() {
    return [{id: 1, name: 'ankur'}]
  }
}

@Module({
  controllers: [RecipeController],
  providers: [
    RecipesService,
    // {
    //   provide: RecipesService,
    //   useClass: RecipesService
    // }
    // {
    //   provide: RecipesService,
    //   useValue: mockRecipeService
    // }
    {
      provide: 'CONNECTION',
      useValue: connection
    }
  ]
})
export class RecipeModule {}
