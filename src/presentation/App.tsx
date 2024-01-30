import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '@pages/auth/Login';
import NoMatch from '@pages/noMatch';
import Signup from '@pages/auth/Signup';
import { RootState } from '@store/index';
import UnAuthorized from '@pages/unAutorized';
import AdminLayout from '@components/Layout/AdminLayout';
import TodoPage from '@pages/admin/Todo';
import Home from '@pages/admin/Home';
import AuthLayout from '@components/Layout/AuthLayout';
import Profile from '@pages/admin/Profile';
import Messages from '@pages/admin/Messages';
import Users from '@pages/admin/Users';



const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="w-screen h-screen flex flex-col items-center py-10 gap-6 bg-auth-light dark:bg-auth-dark">
        <Routes>
          {/* public routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* admin routes */}
          <Route element={<AdminLayout />}>
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/users" element={<Users />} />
            <Route path='/' element={<Home />} />
          </Route>

          {/* UnAuthorized */}
          <Route path="/unauthorized" element={<UnAuthorized />} />

          {/* no match route */}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
};


export default App;