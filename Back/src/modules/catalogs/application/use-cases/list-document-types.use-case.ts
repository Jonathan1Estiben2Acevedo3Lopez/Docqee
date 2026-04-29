import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/shared/database/prisma.service';
import { CatalogOptionDto } from '../dto/catalog-option.dto';

@Injectable()
export class ListDocumentTypesUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<CatalogOptionDto[]> {
    const documentTypes = await this.prisma.tipo_documento.findMany({
      orderBy: { id_tipo_documento: 'asc' },
      select: {
        id_tipo_documento: true,
        codigo: true,
        nombre: true,
      },
    });

    return documentTypes.map((documentType) => ({
      id: documentType.id_tipo_documento,
      name: `${documentType.codigo}|${documentType.nombre}`,
    }));
  }
}
