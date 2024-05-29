import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Clientele from "./pages/clientele";
import Brands from "./pages/brands";
import Services from "./pages/services";
import News from "./pages/news";
import Contact from "./pages/contact";
import NavBar from "./nav/navbar";
import Footer from "./components/footer"
import MyVideo from "./pages/video";
import './App.css';
import ScrollToTopOnMount from "./nav/scroll";
import LoginAdmin from "./admin/pages/login";
import Admin from "./admin/pages/admin";
import NoMatch from "./lib/noPage";
import Privileged from "./admin/pages/privilege";
function App() {
  const location = useLocation();
  const hideNavBarFooter = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTopOnMount />
      {!hideNavBarFooter && <NavBar />}
      <Routes>
        <Route path='admin' element={<Admin/>}>
          <Route index element={<LoginAdmin/>}/>
          <Route path='privileged' element={<Privileged/>} />
        </Route>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/clientele' element={<Clientele />} />
        <Route path='/brands' element={<Brands />} />
        <Route path='/services' element={<Services />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/video' element={<MyVideo />} />
        <Route path='/*' element = {<NoMatch/>}/>
      </Routes>
      {!hideNavBarFooter && <Footer />}
    </>
  );
}

export default App;
