import AddDataModal from '@components/modals/AddDataModal/AddDataModal.tsx';
import AuthModal from '@components/modals/AuthModal/AuthModal.tsx';
import StatusModal from '@components/modals/StatusModal/StatusModal.tsx';
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
    </>
  );
}

export default Modal;
