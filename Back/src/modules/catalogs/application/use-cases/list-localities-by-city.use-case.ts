import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@/shared/database/prisma.service';
import { CatalogOptionDto } from '../dto/catalog-option.dto';

@Injectable()
export class ListLocalitiesByCityUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(cityId: number): Promise<CatalogOptionDto[]> {
    const city = await this.prisma.ciudad.findUnique({
      where: { id_ciudad: cityId },
      select: { id_ciudad: true },
    });

    if (!city) {
      throw new NotFoundException('La ciudad solicitada no existe.');
    }

    const localities = await this.prisma.localidad.findMany({
      where: { id_ciudad: cityId },
      orderBy: { nombre: 'asc' },
      select: {
        id_localidad: true,
        nombre: true,
      },
    });

    return localities.map((locality) => ({
      id: locality.id_localidad,
      name: locality.nombre,
    }));
  }
}