import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header.tsx';
import PrimaryButton from '@components/PrimaryButton/PrimaryButton.tsx';
import SearchBox from '@components/SearchBox/SearchBox.tsx';
import Table from '@components/Table/Table.tsx';
import StyledToastContainer from '@components/ToastContainer/ToastContainer.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { PATH } from '@constants/paths.ts';
import { EMPLOYEES_TABLE_COLUMNS } from '@constants/tables/employees.ts';
import { ADD } from '@constants/values.ts';
import { Employee } from '@custom-types/database/employee.ts';
import { RootState } from '@store/store.ts';
import { getEmployees } from '@utils/dbService.ts';
import { setCloseAnimation } from '@utils/setCloseAnimation.ts';
import { JSX, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Employees(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  const isClosing = useSelector((state: RootState) => state.menu.isClosing);
  const dispatch = useDispatch();
  const [employees, setEmployees] = useState<Employee[]>([]);

  // Close animation effect
  useEffect(() => {
    setCloseAnimation({ isClosing, dispatch });
  }, [isClosing, dispatch]);

  // Get employees data effect
  useEffect(() => {
    const fetchEmployees = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };
    fetchEmployees();
  }, []);

  const memoizedEmployees = useMemo(() => employees, [employees]);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen && 'open'} ${isClosing && 'close'}`}>
        <Header pageTitle={PAGE_TITLE.EMPLOYEES}>
          <PrimaryButton
            name={ADD.EMPLOYEE}
            linkTo={PATH.TO_ADD_MODAL.employees}
          />
        </Header>
        <section className="section">
          <SearchBox<Employee> typeOfData="employees" setData={setEmployees} />
          <div className="page__content table__content">
            <Table columns={EMPLOYEES_TABLE_COLUMNS} data={memoizedEmployees} />
          </div>
        </section>
        <StyledToastContainer />
      </main>
    </>
  );
}

export default Employees;
