import { Outlet } from 'react-router';
import Header from '../header/Header.tsx';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
