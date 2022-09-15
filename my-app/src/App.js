import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import WebsiteLayout from './layouts/WebsiteLayout';
import Page404 from './pages/404';
import HomePage from './pages/HomePage';
import NewsPage from './pages/News';
<script src="https://unpkg.com/primereact/primereact.all.min.js"></script>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
