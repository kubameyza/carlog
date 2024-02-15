import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Layout.module.css';
import Footer from '../Footer/Footer';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
  return (
    <div className={style.layout}>
      <Toaster />
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <Outlet />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
