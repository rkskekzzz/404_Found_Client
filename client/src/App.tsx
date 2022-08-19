import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Sign, Star, Main, Profile, Create } from 'src/pages';

import './App.css';

const ProtectedRoute = () => {
  if (!window.localStorage.getItem('todoAuthToken')) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Sign />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/star" element={<Star />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
