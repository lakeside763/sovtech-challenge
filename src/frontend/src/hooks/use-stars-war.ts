import { useState, useEffect } from "react";
import { gql, useLazyQuery, useQuery } from '@apollo/client';

export const PERSON_ATTRIBUTE = gql`
  fragment personAttribute on Person {
    id
    name
    mass
    height
    hair_color
    eye_color
    skin_color
    gender
    homeworld
    url
    birth_year
  }
`;


const GET_PEOPLE_LIST = gql`
  query GetPeopleList($page: Int, $search: String) {
    getPeopleList(input: {
      page: $page
      search: $search
    }) {
      count
      previous
      next
      people {
        ...personAttribute
      }
    }
  }
  ${PERSON_ATTRIBUTE}
`;

const useStarsWar = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [count, setCount] = useState();
  const { loading, data } = useQuery(GET_PEOPLE_LIST);
  const [getPeopleListRequest, { data: dataByQueryString }] = useLazyQuery(GET_PEOPLE_LIST);

  useEffect(() => {
    if (data) {
      const { getPeopleList: { count, people } } = data;
      setPeopleList(people);
      setCount(count);
    }
  }, [data]);


  useEffect(() => {
    if (dataByQueryString) {
      const { getPeopleList: { count, people } } = dataByQueryString;
      setPeopleList(people);
      setCount(count);
    }
  }, [dataByQueryString]);


  const firstLetter = (text: string) => text.charAt(0);

  const getPeopleListBySearch = (search: string) => {
    getPeopleListRequest({ variables: { search } })
  }

  const getPeopleListByPage = (page: number) => {
    getPeopleListRequest({ variables: { page } });
  }

  return {
    peopleList,
    count,
    loading,
    firstLetter,
    getPeopleListBySearch,
    getPeopleListByPage,
  }
}

export default useStarsWar;