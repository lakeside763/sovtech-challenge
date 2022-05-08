import { useState, useEffect } from "react";
import { gql, useLazyQuery, useQuery } from '@apollo/client';

const PERSON_ATTRIBUTE = gql`
  fragment individualAttribute on Individual {
    name
    mass
    hair_color
    eye_color
    gender
    homeworld
    url
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
        ...individualAttribute
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
  }, [dataByQueryString])



  const firstLetter = (text: string) => text.charAt(0);

  const getPeopleListBySearch = (search: string) => {
    getPeopleListRequest({ variables: { search } })
  }

  return {
    peopleList,
    count,
    loading,
    firstLetter,
    getPeopleListBySearch,
  }
}

export default useStarsWar;