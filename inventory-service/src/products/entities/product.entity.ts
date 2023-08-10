import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Product {
  @Field(() => ID, { description: 'Example field (placeholder)' })
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  quantity: number;
}
