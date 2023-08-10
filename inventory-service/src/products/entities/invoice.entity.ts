import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Product } from './product.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Invoice {
  @Field(() => ID)
  id: string;

  // In order to know what products we need to fetch
  // we will need to get the list of productIds
  @Field(() => [Product])
  @Directive('@requires(fields: "productIds")')
  products?: Product[];

  // This information is already provided by the
  // invoices-service so we can fetch this data
  // from there
  @Field(() => [String])
  @Directive('@external')
  productIds: string[];
}
