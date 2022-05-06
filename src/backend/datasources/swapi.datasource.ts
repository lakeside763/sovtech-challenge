import { Request, RESTDataSource } from 'apollo-datasource-rest';
import { UserInputError } from 'apollo-server-express';
import { Maybe } from 'graphql/jsutils/Maybe';
import { GetPeopleInput } from '../schema/resolver-types'

class SwapiDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/'
  }

  didEncounterError(error: Error, _request: Request): void {
    throw new UserInputError(error.message)
  }

  async getPeople(input: Maybe<GetPeopleInput>) {
    const { page, search, url } = input || {}; 
    const queryString =  search ? `?search=${search}` : `?page=${page || 1}`;
    const requestUrl = url ? this.baseURL = url : `people/${queryString}`;
    const { results, ...rest } = await this.get(requestUrl);
    return { ...rest, people: results };
  }
}

export default SwapiDatasource;