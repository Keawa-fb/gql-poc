import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Invoice {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field()
  createdAt: Date;

  @Field(() => [String])
  productIds: string[];
}
