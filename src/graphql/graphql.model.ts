/* eslint-disable prettier/prettier */
import { Field,ObjectType } from "@nestjs/graphql";

@ObjectType()
 export class Person {
    @Field(() => String, {nullable:true})
    name:string;
    @Field(() => String, {nullable:true})
    email:string;
    @Field(() => String, {nullable:true})
    age:string;
    @Field(() => Number, {nullable:true})
    phone:number;
}