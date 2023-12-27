import { Module } from '@nestjs/common';
// import { GraphqlResolver } from './graphql/graphql.resolver';
import { GraphqlResolver } from './graphql.resolver';
import { GraphqlService } from './graphql.service';

@Module({
  providers: [GraphqlResolver, GraphqlService],
})
export class GraphqlModule {
  static forRoot: any;
}
