import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Invoice } from './entities/invoice.entity';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly productsService: ProductsService) {}

  @ResolveField(() => [Product])
  async products(@Parent() invoice: Invoice): Promise<Product[]> {
    return await this.productsService.findManyWithIds(invoice.productIds);
  }
}
