import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import WebsiteLayout from './layouts/WebsiteLayout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={WebsiteLayout}>
          <Route index element={HomePage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
