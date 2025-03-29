// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import { Basics, Props, State, NotFound, Api, 
          Hooks, Routetuts, Forms,
          UnitTesting, Error, LazyLoad, Hoc, Solid
 } from './components';
import useTheme from "./components/state/theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
        <div className={`app ${theme}`}>
          <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Basics
            </NavLink>
            <NavLink to="/props/2" className={({ isActive }) => (isActive ? "active" : "")}>
            Props
            </NavLink>
            <NavLink to="/state" className={({ isActive }) => (isActive ? "active" : "")}>
              State
            </NavLink>
            <NavLink to="/components" className={({ isActive }) => (isActive ? "active" : "")}>
              Components
            </NavLink>
            <NavLink to="/hoc" className={({ isActive }) => (isActive ? "active" : "")}>
              Hoc
            </NavLink>
            <NavLink to="/routetuts" className={({ isActive }) => (isActive ? "active" : "")}>
              Routes
            </NavLink>
            <NavLink to="/hooks" className={({ isActive }) => (isActive ? "active" : "")}>
              Hooks
            </NavLink>
            <NavLink to="/forms" className={({ isActive }) => (isActive ? "active" : "")}>
              Forms
            </NavLink>
            <NavLink to="/api" className={({ isActive }) => (isActive ? "active" : "")}>
              API
            </NavLink>
            <NavLink to="/error" className={({ isActive }) => (isActive ? "active" : "")}>
              Exception
            </NavLink>
            <NavLink to="/lazyloading" className={({ isActive }) => (isActive ? "active" : "")}>
              Lazy Loading
            </NavLink>
            <NavLink to="/unittesting" className={({ isActive }) => (isActive ? "active" : "")}>
              UnitTesting
            </NavLink>
            <NavLink to="/solid" className={({ isActive }) => (isActive ? "active" : "")}>
              SOLID
            </NavLink>
            <NavLink to="/desing-patterns" className={({ isActive }) => (isActive ? "active" : "")}>
              DP
            </NavLink>
            <NavLink to="/atomic" className={({ isActive }) => (isActive ? "active" : "")}>
              Atomic UI
            </NavLink>
          </nav>
          
          <div className="content">
            <Routes>
                <Route path="/" element={<Basics/>} />
                <Route path="/state" element={<State />} />
                <Route path="/api" element={<Api />} />
                <Route path="/components" element={<Api />} />
                <Route path="/hoc" element={<Hoc />} />
                <Route path="/hooks" element={<Hooks />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/solid" element={<Solid />} />
                <Route path="/routetuts" element={<Routetuts />} />
                <Route path="/props/:id" element={
                  <Props 
                    propText={"This is text"}
                    propNum={4353}
                    propBool={false}
                    propArray={[1,2,3]}
                  />
                  }
                />
                <Route path="/lazyloading" element={<LazyLoad />} />
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
