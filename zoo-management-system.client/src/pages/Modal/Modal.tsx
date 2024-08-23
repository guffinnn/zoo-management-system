import AddDataModal from '@pages/Modal/modals/AddDataModal/AddDataModal.tsx';
import AuthModal from '@pages/Modal/modals/AuthModal/AuthModal.tsx';
import StatusModal from '@pages/Modal/modals/StatusModal/StatusModal.tsx';
import ValidationModal from '@pages/Modal/modals/ValidationModal/ValidationModal.tsx';
import { JSX, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Modal(): JSX.Element {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname.includes('modal')) {
      document.body.classList.add('--modal');
    }
    return () => {
      document.body.classList.remove('--modal');
    };
  }, [location]);

  return (
    <>
      {id === 'auth' && <AuthModal />}
      {id === 'status' && <StatusModal />}
      {id === 'add' && <AddDataModal />}
      {id === 'validation' && <ValidationModal />}
    </>
  );
}

export default Modal;
