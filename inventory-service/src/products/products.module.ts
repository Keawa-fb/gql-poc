import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { Invoice } from './entities/invoice.entity';
import { InvoiceResolver as InvoicesResolver } from './invoices.resolver';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      sortSchema: true,
      buildSchemaOptions: {
        // Since products don't need to reference Invoice on their own
        // model (yet we resolve Product[] for Invoice), we need to note
        // that Invoice is an orphaned type
        orphanedTypes: [Invoice],
      },
    }),
  ],
  providers: [ProductsResolver, ProductsService, InvoicesResolver],
})
export class ProductsModule {}
