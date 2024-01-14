import { HashRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { Home, Information, Places, Events, Regions, Culture } from './components'
import './App.css'

function App() {

  return (
    <Router>
      <header className='header'>
        <nav className='nav'>
            <NavLink to="/" key={1} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Home</NavLink>
            <NavLink to="/Places" key={2} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Places</NavLink>
            <NavLink to="/Regions" key={3} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Regions</NavLink>
            <NavLink to="/Culture" key={4} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Culture</NavLink>
            <NavLink to="/Events"  key={5} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Events</NavLink>
            <NavLink to="/Information" key={6} className={({ isActive }) => (isActive ? 'nav__link active' : 'nav__link')}>Information</NavLink>
        </nav>
      </header>
      <footer className='footer'>
        <span className='copyright'>© 2024</span><a href='https://github.com/o-step'>o-step</a>
      </footer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/Places" element={<Places />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Regions" element={<Regions />} />
          <Route path="/Culture" element={<Culture />} />
        </Routes>
    </Router>
  )
}

export default App
