import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { AuthProvider } from './context/AuthContext.jsx';
import Layout from './components/Layout.jsx';
import { RequireAuth } from './components/ui.jsx';
import Home from './pages/Home.jsx';
import Catalog from './pages/Catalog.jsx';
import Course from './pages/Course.jsx';
import Lesson from './pages/Lesson.jsx';
import { Login, Register } from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Certificate from './pages/Certificate.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="kurslar" element={<Catalog />} />
            <Route path="kurslar/:slug" element={<Course />} />
            <Route path="kurslar/:slug/dars/:lessonId" element={<RequireAuth><Lesson /></RequireAuth>} />
            <Route path="kirish" element={<Login />} />
            <Route path="royxatdan-otish" element={<Register />} />
            <Route path="kabinet" element={<RequireAuth><Dashboard /></RequireAuth>} />
            <Route path="sertifikat/:slug" element={<RequireAuth><Certificate /></RequireAuth>} />
            <Route path="biz-haqimizda" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
);
