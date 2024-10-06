import { PATH } from '@constants/paths.ts';
import { UserState } from '@custom-types/user.ts';
import { addNotification } from '@store/notificationSlice.ts';
import { logOut as logOutFromRedux, setUser } from '@store/userSlice';
import {
  getEmployeeByUserUid,
  logOut,
  observeAuthState,
} from '@utils/authService';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const useAuth = (userData: UserState) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = observeAuthState(async (user) => {
      if (user) {
        if (user.email) {
          const employee = await getEmployeeByUserUid(user.uid);
          if (employee) {
            dispatch(
              setUser({
                uid: user.uid,
                email: user.email,
                is_admin: employee?.is_admin || false,
              }),
            );
          }
          navigate(PATH.TO_STATUS_MODAL);
        } else {
          dispatch(
            addNotification({
              type: 'error',
              message: 'Ошибка входа в аккаунт',
            }),
          );
        }
      } else {
        dispatch(logOutFromRedux());
        logOut();
        navigate(PATH.TO_AUTH_MODAL);
      }
    });

    return () => unsubscribe();
  }, [userData, dispatch, navigate]);
};
