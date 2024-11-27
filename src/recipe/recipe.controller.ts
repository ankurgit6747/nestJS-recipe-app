import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { RecipesService } from './recipe.service';
import { CreateRecipeDTO } from './dto/create-recipe-dto';
import { Connection, connection } from 'src/common/constants/connection';

@Controller('recipes')
export class RecipeController {

  constructor(
    private recipesService: RecipesService,
    @Inject('CONNECTION')
    private connection: Connection
  ) {
    console.log(`THIS IS CONNECTION STRING ${this.connection.CONNECTION_STRING}`)
  }

  @Post()
  create(@Body() createRecipeDTO: CreateRecipeDTO) {
    return this.recipesService.create(createRecipeDTO);
  }

  @Get()
  findAll() {
    try {
      return this.recipesService.findAll();
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error
        }
      )
    }
  }

  @Get(':id')
  findOne(
    // @Param('id', ParseIntPipe) --- without error handling
    @Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id: number,
  ) {
    return `fetch song based on ${typeof id}`
  }

  @Put(':id')
  update() {
    return 'update recipe based on id'
  }

  @Delete(':id')
  delete() {
    return 'delete recipe based on id'
  }
}
