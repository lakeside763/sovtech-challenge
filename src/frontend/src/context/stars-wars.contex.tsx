import { createContext } from 'react'
import useStarsWar from '../hooks/use-stars-war';

export const StarsWarContext = createContext({
  peopleList: [],
  count: 0,
  loading: false,
  firstLetter: (text: string) => text,
  getPeopleListBySearch: (search: string) => search,
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