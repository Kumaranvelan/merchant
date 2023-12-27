/* eslint-disable prettier/prettier */
import { Graphqldto } from "./graphql.dto";
import { Person } from "./graphql.model";
import { GraphqlService } from './graphql.service';
import { Args, Mutation, Resolver,Query } from "@nestjs/graphql";

@Resolver(() => Person)
export class GraphqlResolver{
    constructor(private readonly graphqlservice:GraphqlService){}

    @Query(()=> Person,{nullable:true})
    test(@Args('graphqldto') graphqldto:Graphqldto,
    @Args("email")email:string){
        return this.graphqlservice.testservice(graphqldto,email)
    }
    
    @Mutation(()=> Person)
    createPerson(@Args('graphqldto') graphqldto:Graphqldto){
        return this.graphqlservice.createPerson(graphqldto)
    }

}
