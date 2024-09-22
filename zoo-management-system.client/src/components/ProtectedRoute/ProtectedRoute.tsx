import { PATH } from '@constants/paths.ts';
import { RootState } from '@store/store.ts';
import React from 'react';
import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.user);

  if (!user) {
    return <Navigate to={PATH.TO_AUTH_MODAL} />;
  }

  return children;
};

export default ProtectedRoute;
