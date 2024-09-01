import { PATH } from '@constants/paths.ts';
import { UserState } from '@custom-types/user.ts';
import { logOut as logOutFromRedux, setUser } from '@store/userSlice';
import { logOut, observeAuthState } from '@utils/authService';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useAuth = (userData: UserState) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = observeAuthState((user) => {
      if (user) {
        if (user.email) {
          dispatch(setUser({ email: user.email }));
          navigate(PATH.TO_STATUS_MODAL);
        } else {
          console.log('Ошибка: User is not null');
        }
      } else {
        dispatch(logOutFromRedux());
        logOut();
      }
    });

    return () => unsubscribe();
  }, [userData, dispatch]);
};
