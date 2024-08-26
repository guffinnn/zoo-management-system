import { PATH } from '@constants/paths';
import Animals from '@pages/Animals/Animals';
import Feeding from '@pages/Feeding/Feeding.tsx';
import Home from '@pages/Home/Home';
import Modal from '@pages/Modal/Modal.tsx';
import WorkTime from '@pages/WorkTime/WorkTime.tsx';
import { JSX } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const { TO_HOME, TO_ANIMALS, TO_FEEDING, TO_WORKTIME, TO_MODAL } = PATH;

  return (
    <Router>
      <Routes>
        <Route path={TO_HOME} element={<Home />} />
        <Route path={TO_ANIMALS} element={<Animals />} />
        <Route path={TO_FEEDING} element={<Feeding />} />
        <Route path={TO_WORKTIME} element={<WorkTime />} />
        <Route path={TO_MODAL} element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
