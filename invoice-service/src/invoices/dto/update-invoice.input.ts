import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateInvoiceInput } from './create-invoice.input';

@InputType()
export class UpdateInvoiceInput extends PartialType(CreateInvoiceInput) {
  @Field()
  id: string;

  @Field(() => [String])
  productIds: string[];
}
