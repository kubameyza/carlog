import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Layout.module.css';
import Footer from '../Footer/Footer';
const Layout = () => {
  return (
    <div className={style.layout}>
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
