import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Sign, Star, Main, Profile, Create, NotFound } from 'src/pages';

import './App.css';

const AuthCheckRoute = () => {
  if (window.localStorage.getItem('todoAuthToken')) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

const ProtectedRoute = () => {
  if (!window.localStorage.getItem('todoAuthToken')) {
    return <Outlet />;
    // return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthCheckRoute />}>
          <Route path="/auth" element={<Sign />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/star" element={<Star />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
