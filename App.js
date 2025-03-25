import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Basics, Props, States, NotFound, Api, 
          ContextApi, Redux, Hooks, Navigation, Forms,
          SSR, SSG, SWR, UnitTesting, Error
 } from './components';

function App() {

  return (
    <Router>
        <div className="app">
          <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Basics
            </NavLink>
            <NavLink to="/props" className={({ isActive }) => (isActive ? "active" : "")}>
            Props
            </NavLink>
            <NavLink to="/states" className={({ isActive }) => (isActive ? "active" : "")}>
              States
            </NavLink>
            <NavLink to="/hooks" className={({ isActive }) => (isActive ? "active" : "")}>
              Hooks
            </NavLink>
            <NavLink to="/contextapi" className={({ isActive }) => (isActive ? "active" : "")}>
              ContextApi
            </NavLink>
            <NavLink to="/redux" className={({ isActive }) => (isActive ? "active" : "")}>
              Redux
            </NavLink>
            <NavLink to="/api" className={({ isActive }) => (isActive ? "active" : "")}>
              Api
            </NavLink>
            <NavLink to="/swr" className={({ isActive }) => (isActive ? "active" : "")}>
            SWR
            </NavLink>
            <NavLink to="/navigation" className={({ isActive }) => (isActive ? "active" : "")}>
            Nav
            </NavLink>
            <NavLink to="/error" className={({ isActive }) => (isActive ? "active" : "")}>
            Error
            </NavLink>
            <NavLink to="/randominvalidroute" className={({ isActive }) => (isActive ? "active" : "")}>
            Not Found
            </NavLink>
            <NavLink to="/forms" className={({ isActive }) => (isActive ? "active" : "")}>
            Forms
            </NavLink>
            <NavLink to="/ssr" className={({ isActive }) => (isActive ? "active" : "")}>
            SSR
            </NavLink>
            <NavLink to="/ssg" className={({ isActive }) => (isActive ? "active" : "")}>
            SSG
            </NavLink>
            <NavLink to="/unittesting" className={({ isActive }) => (isActive ? "active" : "")}>
            UnitTesting
            </NavLink>
          </nav>
          
          <div className="content">
            <Routes>
                <Route path="/" element={<Basics/>} />
                <Route path="/states" element={<States />} />
                <Route path="/api" element={<Api />} />
                <Route path="/contextapi" element={<ContextApi />} />
                <Route path="/redux" element={<Redux />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/navigation" element={<Navigation />} />
                <Route path="/ssr" element={<SSR />} />
                <Route path="/swr" element={<SWR />} />
                <Route path="/ssg" element={<SSG />} />
                <Route path="/props" element={<Props />} />
                <Route path="/unittesting" element={<UnitTesting />} />
                <Route path="/error" element={<Error />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
    </Router>
  );
}


export default App;
