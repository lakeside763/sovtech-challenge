import { GraphqlContext } from '../../models/datasources.model';
import { Resolvers, QueryGetPeopleListArgs, QueryGetIndividualByIdArgs } from '../resolver-types';


const swapiResolver: Resolvers = {
  Query: {
    getPeopleList: async (parent: unknown, { input }: QueryGetPeopleListArgs, { dataSources }: GraphqlContext) => {
      try {
        return await dataSources.swapi.getPeople(input);
      } catch (error) {
        return error
      }
    },
    getIndividualById: async (parent: unknown, { id }: QueryGetIndividualByIdArgs, { dataSources }: GraphqlContext) => {
      try {
        return await dataSources.swapi.getIndividual(id)
      } catch (error) {
        return error;
      }
    }
  }
}

export default swapiResolver;