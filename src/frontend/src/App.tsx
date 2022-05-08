import React from 'react';
import { Routes, Route } from 'react-router-dom'
import PeopleList from './components/people/people-list.component';
import PersonDetails from './components/person/person-details.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<PeopleList />} />
        <Route path='/people/:id' element={<PersonDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
