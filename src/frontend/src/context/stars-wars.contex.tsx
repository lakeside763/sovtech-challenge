import { createContext } from 'react'
import useStarsWar from '../hooks/use-stars-war';

export const StarsWarContext = createContext({
  peopleList: [],
  count: 0,
  loading: false,
  currentPage: 1,
  firstLetter: (text: string) => text,
  getPeopleListBySearch: (search: string) => search,
  getPeopleListByPage: (page: number) => page,
});


const StarsWarProvider = ({ children }: any) => {
  const { ...rest } = useStarsWar();
  const value: any = { ...rest };
  return(
    <StarsWarContext.Provider value={value}>
      {children}
    </StarsWarContext.Provider>
  )
}

export default StarsWarProvider;