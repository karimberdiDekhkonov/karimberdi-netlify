import './App.scss';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './Pages/About/About'
import Blogs from './Pages/Blogs/Blogs'
import Business from './Pages/Business/Business'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import AboutUz from './Pages/About/AboutUz'
import BlogsUz from './Pages/Blogs/BlogsUz'
import BusinessUz from './Pages/Business/BusinessUz'
import HomeUz from './Pages/Home/HomeUz'
import ProjectsUz from './Pages/Projects/ProjectsUz'
import { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const navRef = useRef();
  let [eng, setEng ] = useState(true)

  const changeLanguage = () =>{
    setEng((eng) => (eng == true ? false : true))                           
  }
  
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive-nav");
  }
  let home, about, blogs, projects, business, homePath, antiHomePath, aboutPath, blogsPath, projectsPath,businessPath, language;
  if(eng === true){
    home = "Home";
    blogs = "Blogs";
    about = "About me";
    projects = "Projects";
    business = "Business";
    homePath = "/eng/home"
    antiHomePath = "/uzb/home"
    blogsPath = "/eng/blogs"
    aboutPath = "/eng/about"
    projectsPath = "/eng/projects"
    businessPath = "/eng/business"
    language = "Uzb"
  }
  else{
    home = "Bosh sahifa";
    about = "Men haqimda";
    blogs = "Bloglar";
    projects = "Loyihalar";
    business = "Buzines";
    homePath = "/uzb/home"
    antiHomePath = "/eng/home"
    aboutPath = "/uzb/about"
    blogsPath = "/uzb/blogs"
    projectsPath = "/uzb/projects"
    businessPath = "/uzb/business"
    language = "Eng"
  }

  return (
    <div className="App">
      <div>
      <Router>
      <Navbar className='navbar' bg="light" expand="lg">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand>
          <div className="logo d-flex fs-2 fw-bolder">
            <span className="karim">Karim</span>
            <span className="berdi text-danger">berdi.</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto links">
            <Nav.Link className='hover' as={Link} to={homePath}>{home}</Nav.Link>
            <Nav.Link className='hover' as={Link} to={aboutPath}>{about}</Nav.Link>
            <Nav.Link className='hover' as={Link} to={blogsPath}>{blogs}</Nav.Link>
            <Nav.Link className='hover' as={Link} to={projectsPath}>{projects}</Nav.Link>
            <Nav.Link className='hover' as={Link} to={businessPath}>{business}</Nav.Link>
            <Nav.Link className='hover' as={Link} onClick={changeLanguage} to={antiHomePath}>
              <button  className='btn btn-dark'>{language}</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <Routes>
          <Route path={'/eng/home'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path='/eng/about' element={<About/>}/>
          <Route path='/eng/projects' element={<Projects/>}/>
          <Route path='/eng/blogs' element={<Blogs/>}/>
          <Route path='/eng/business' element={<Business/>}/>
          <Route path='/*' element={<ErrorPage/>}/>
          {/* Uzb */}
          <Route path='/uzb/home' element={<HomeUz/>}/>
          <Route path='/uzb/about' element={<AboutUz/>}/>
          <Route path='/uzb/projects' element={<ProjectsUz/>}/>
          <Route path='/uzb/blogs' element={<BlogsUz/>}/>
          <Route path='/uzb/business' element={<BusinessUz/>}/>
        </Routes>
      </Router>
      </div> 
    </div>
  );
}

export default App;
