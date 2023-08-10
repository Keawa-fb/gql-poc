import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create({ name, description, quantity }: CreateProductInput) {
    return await this.prisma.product.create({
      data: {
        name,
        description,
        quantity,
      },
    });
  }

  async findAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    { name, description, quantity }: UpdateProductInput,
  ) {
    return await this.prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        quantity,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.product.delete({
      where: { id },
    });
  }

  async findManyWithIds(ids: string[]) {
    return await this.prisma.product.findMany({
      where: {
        id: { in: ids },
      },
    });
  }
}
