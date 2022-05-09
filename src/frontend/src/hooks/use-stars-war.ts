import { useState, useEffect } from "react";
import { gql, useLazyQuery, useQuery } from '@apollo/client';

export const PERSON_FRAGMENT = gql`
  fragment personFields on Person {
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
        ...personFields
      }
    }
  }
  ${PERSON_FRAGMENT}
`;

const useStarsWar = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [count, setCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data } = useQuery(GET_PEOPLE_LIST);
  const [getPeopleListRequest, { data: dataByQueryString }] = useLazyQuery(GET_PEOPLE_LIST);
  const listPerPage = 10;

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
      setCurrentPage((currentPage) => count < listPerPage ? 1 : currentPage);
    }
  }, [dataByQueryString]);


  const firstLetter = (text: string) => text.charAt(0);

  const getPeopleListBySearch = (search: string) => {
    getPeopleListRequest({ variables: { search } })
  }

  const getPeopleListByPage = (page: number) => {
    getPeopleListRequest({ variables: { page } });
    setCurrentPage(page);
  }

  return {
    peopleList,
    count,
    loading,
    currentPage,
    firstLetter,
    getPeopleListBySearch,
    getPeopleListByPage,
  }
}

export default useStarsWar;