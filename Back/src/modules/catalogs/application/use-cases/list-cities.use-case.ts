import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/shared/database/prisma.service';
import { CatalogOptionDto } from '../dto/catalog-option.dto';

@Injectable()
export class ListCitiesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<CatalogOptionDto[]> {
    const cities = await this.prisma.ciudad.findMany({
      orderBy: { nombre: 'asc' },
      select: {
        id_ciudad: true,
        nombre: true,
      },
    });

    return cities.map((city) => ({
      id: city.id_ciudad,
      name: city.nombre,
    }));
  }
}