import { PATH } from '@constants/paths';
import Animals from '@pages/Animals/Animals';
import Feeding from '@pages/Feeding/Feeding.tsx';
import Home from '@pages/Home/Home';
import { JSX } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const { TO_HOME, TO_ANIMALS, TO_FEEDING } = PATH;

  return (
    <Router>
      <Routes>
        <Route path={TO_HOME} element={<Home />} />
        <Route path={TO_ANIMALS} element={<Animals />} />
        <Route path={TO_FEEDING} element={<Feeding />} />
      </Routes>
    </Router>
  );
}

export default App;
