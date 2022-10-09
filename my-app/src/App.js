import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import WebsiteLayout from './layouts/WebsiteLayout';
import Page404 from './pages/404';
import AboutPage from './pages/About';
import AccountInfo from './pages/AccountInfo';
import CustomerGuide from './pages/CustomerGuide';
import EquipmentPage from './pages/Equipment';
import HomePage from './pages/HomePage';
import NewsPage from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Team from './pages/Team';
<script src="https://unpkg.com/primereact/primereact.all.min.js"></script>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='news' element={<NewsPage />} />
          <Route path='news/detail' element={<NewsDetail />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='infoAccount' element={<AccountInfo />} />
          <Route path='doi-ngu-nhan-vien' element={<Team />} />
          <Route path='huong-dan-khac-hang' element={<CustomerGuide />} />
          <Route path='trang-thiet-bi' element={<EquipmentPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
