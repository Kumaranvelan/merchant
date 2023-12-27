/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Graphqldto } from './graphql.dto';

@Injectable()
export class GraphqlService {
    constructor() {}
    async testservice(graphqldto:Graphqldto,email: string){
        const Person = graphqldto;
        console.log(Person,email);
        return Person;
    }

    async createPerson(graphqldto:Graphqldto){
        console.log(graphqldto)
        return null;
    }
}
