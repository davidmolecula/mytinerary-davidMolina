import {Outlet} from 'react-router-dom';
import Header from '../layout/Header.jsx';
import Footer from './Footer.jsx';

const Main = () => {
return (
    <>
    <Header/>
    <Outlet/>
    <Footer/> 
    </>
)
}

export default Main