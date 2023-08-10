import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInput {
  @Field(() => [String])
  productIds: string[];
}
