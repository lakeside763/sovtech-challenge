import React from 'react';
import { Routes, Route } from 'react-router-dom'
import PeopleList from './components/people/people-list.component';
import IndividualDetails from './components/individual/individual-details.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} >
        <Route index element={<PeopleList />} />
        <Route path='/people/:id' element={<IndividualDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
