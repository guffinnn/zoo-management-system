import AsideNavBar from '@components/AsideNavBar/AsideNavBar';
import { PATH } from '@constants/paths';
import Animals from '@pages/Animals/Animals';
import Home from '@pages/Home/Home';
import { RootState } from '@store/store';
import { JSX } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const { TO_HOME, TO_ANIMALS } = PATH;
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      {/*ASIDE COMPONENT*/}
      <AsideNavBar />
      {/*MAIN COMPONENT*/}
      <main className={`main ${isOpen ? 'open' : ''}`}>
        <Router>
          <Routes>
            <Route path={TO_HOME} element={<Home />} />
            <Route path={TO_ANIMALS} element={<Animals />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
