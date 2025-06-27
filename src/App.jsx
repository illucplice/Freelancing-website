import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './component/nav/Navbar';
import Insidenav from './component/nav/Insidenav';
import Freenav from './component/nav/Freenav'; 
import Hero from './component/hero/Hero';
import Footer from './component/footer/Footer';
import Login from './component/auth/Login';
import Signup from './component/auth/Signup';
import ClientDashboard from './component/Client/ClientDashboard';
import Project from './component/Client/Project';
import Hire from './component/Client/Hire';
import Profile from './component/Freelance/Profile'; 

const App = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  const isProjectPage = location.pathname.startsWith("/project");
  const isHire = location.pathname.startsWith("/hire");
  const isProfile = location.pathname.startsWith("/earn");

  return (
    <div className='min-h-screen bg-black text-white'>
      {!isDashboard && !isProjectPage && !isHire && !isProfile && <Navbar />}
      {(isDashboard || isProjectPage || isHire) && <Insidenav />} 
      {isProfile && <Freenav />} 

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/earn" element={<Profile />} /> 
      </Routes>

      <Footer />
    </div>
  );
};

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
