import React from 'react';
import { Routes, Route } from 'react-router-dom'
import People from './components/people/people.component';
import Person from './components/person/person.component';
import Navigation from './routes/navigation.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<People />} />
        <Route path='/people/:id' element={<Person />} />
      </Route>
    </Routes>
  );
}

export default App;
