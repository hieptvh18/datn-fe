import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';
import Page404 from './pages/404';
import AboutPage from './pages/About';
import AccountInfo from './pages/AccountInfo';
import CustomerGuide from './pages/CustomerGuide';
import EquipmentPage from './pages/Equipment';
import HomePage from './pages/HomePage';
import MedicalRecord from './pages/MedicalRecord';
import NewsPage from './pages/News';
import NewsDetail from './pages/NewsDetail';
import QAPage from './pages/QAPage';
import ServiceDetail from './pages/ServiceDetail';
import ServicePage from './pages/ServicePage';
import Team from './pages/Team';
<script src="https://unpkg.com/primereact/primereact.all.min.js"></script>

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='tin-tuc' element={<NewsPage />} />
          <Route path='news/detail/:id' element={<NewsDetail />} />
          <Route path='news/:slug/:id' element={<ServiceDetail />} />
          <Route path='ve-chung-toi' element={<AboutPage />} />
          <Route path='ho-so-benh-nhan' element={<AccountInfo />} />
          <Route path='doi-ngu-nhan-vien' element={<Team />} />
          <Route path='huong-dan-khach-hang' element={<CustomerGuide />} />
          <Route path='trang-thiet-bi' element={<EquipmentPage />} />
          <Route path='tat-ca-dich-vu' element={<ServicePage />} />
          <Route path='dat-lich-kham' element={<ServicePage />} />
          <Route path='cau-hoi-thuong-gap' element={<QAPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='ho-so-benh-an/:token/:id' element={<MedicalRecord />} />

      </Routes>
    </div>
  );
}

export default App;
