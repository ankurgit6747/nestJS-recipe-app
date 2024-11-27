import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { RecipeController } from './recipe/recipe.controller';

@Module({
  imports: [RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware)
    // .forRoutes('recipes')  -- option 1

    // consumer.apply(LoggerMiddleware)
    //   .forRoutes({
    //     method: RequestMethod.POST, 
    //     path: 'recipes' 
    //   })     ------- option 2

    consumer.apply(LoggerMiddleware)
      .forRoutes(RecipeController) // --------- option 3
  }
}
