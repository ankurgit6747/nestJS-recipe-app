import { Injectable } from '@nestjs/common';

@Injectable()
export class RecipesService {
  // local DB / array

  private readonly recipes = [];

  // we have created two method and we can inject this service into the controller
  create(recipe){
    // save the recipes in the DB
    this.recipes.push(recipe);
    return this.recipes
  }

  findAll() {
    // fetch the recipes from the DB
    // throw new Error('error in DB while fetching records')
    
    return this.recipes
  }
}
