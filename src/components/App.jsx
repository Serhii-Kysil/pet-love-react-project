import "./App.css";

import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./Layout";
const FriendsPage = lazy(() => import("../pages/FriendsPage/FriendsPage"));
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("../pages/NoticesPage/NoticesPage"));
const LogInPage = lazy(() => import("../pages/LogInPage/LogInPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage/RegisterPage"));

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
