import AsideNavBar from '@components/AsideNavBar/AsideNavBar.tsx';
import Header from '@components/Header/Header.tsx';
import { PAGE_TITLE } from '@constants/pages.ts';
import { RootState } from '@store/store.ts';
import { JSX } from 'react';
import { useSelector } from 'react-redux';

function Feeding(): JSX.Element {
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <AsideNavBar />
      <main className={`main ${isOpen ? 'open' : ''}`}>
        <Header pageTitle={PAGE_TITLE.FEEDING} />
        <section className="section"></section>
      </main>
    </>
  );
}

export default Feeding;
