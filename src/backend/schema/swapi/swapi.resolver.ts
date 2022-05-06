import { GraphqlContext } from '../../models/datasources.model';
import { Resolvers, QueryGetPeopleArgs } from '../resolver-types';


const swapiResolver: Resolvers = {
  Query: {
    getPeople: async (parent: unknown, { input }: QueryGetPeopleArgs, { dataSources }: GraphqlContext) => {
      try {
        return await dataSources.swapi.getPeople(input);
      } catch (error) {
        return error
      }
    }
  }
}

export default swapiResolver;