import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateInvoiceInput } from './dto/create-invoice.input';
import { UpdateInvoiceInput } from './dto/update-invoice.input';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create({ productIds }: CreateInvoiceInput) {
    return await this.prisma.invoice.create({
      data: {
        productIds: productIds,
      },
    });
  }

  async findAll() {
    return await this.prisma.invoice.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.invoice.findUnique({
      where: { id },
    });
  }

  async update(id: string, { productIds }: UpdateInvoiceInput) {
    return await this.prisma.invoice.update({
      where: { id },
      data: {
        productIds: productIds,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.invoice.delete({
      where: { id },
    });
  }
}
