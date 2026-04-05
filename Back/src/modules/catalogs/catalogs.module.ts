import { Module } from '@nestjs/common';

import { ListCitiesUseCase } from './application/use-cases/list-cities.use-case';
import { ListLocalitiesByCityUseCase } from './application/use-cases/list-localities-by-city.use-case';
import { CatalogsController } from './controller/catalogs.controller';

@Module({
  controllers: [CatalogsController],
  providers: [ListCitiesUseCase, ListLocalitiesByCityUseCase],
  exports: [ListCitiesUseCase, ListLocalitiesByCityUseCase],
})
export class CatalogsModule {}