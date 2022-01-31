import NavbarMain from './components/NavbarMain'
import './App.css';
import routes from './router/route';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavbarMain />
        <div className='content'>
          <Routes>
            {
              routes.map(x => (
                <Route key={x.to} path={x.to} element={x.components} exact/>
              ))
            }
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
