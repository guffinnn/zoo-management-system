import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute.tsx';
import { PATH } from '@constants/paths';
import Animals from '@pages/Animals/Animals';
import Cleaning from '@pages/Cleaning/Cleaning.tsx';
import Employees from '@pages/Employee/Employees.tsx';
import Feeding from '@pages/Feeding/Feeding.tsx';
import Home from '@pages/Home/Home';
import MedicalExam from '@pages/MedicalExam/MedicalExam.tsx';
import Modal from '@pages/Modal/Modal.tsx';
import WorkTime from '@pages/WorkTime/WorkTime.tsx';
import { JSX } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  const {
    TO_HOME,
    TO_ANIMALS,
    TO_FEEDING,
    TO_WORKTIME,
    TO_EXAMINATION,
    TO_EMPLOYEES,
    TO_CLEANING,
    TO_MODAL,
  } = PATH;

  return (
    <Router>
      <Routes>
        <Route
          path={TO_HOME}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_ANIMALS}
          element={
            <ProtectedRoute>
              <Animals />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_FEEDING}
          element={
            <ProtectedRoute>
              <Feeding />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_WORKTIME}
          element={
            <ProtectedRoute>
              <WorkTime />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_EXAMINATION}
          element={
            <ProtectedRoute>
              <MedicalExam />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_EMPLOYEES}
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path={TO_CLEANING}
          element={
            <ProtectedRoute>
              <Cleaning />
            </ProtectedRoute>
          }
        />
        <Route path={TO_MODAL} element={<Modal />} />
      </Routes>
    </Router>
  );
}

export default App;
