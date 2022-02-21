import { Home } from './app/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { Footer, Navigation, PageNotFound } from './commons/components';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={
            <>
              <Navigation />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/*" element={
            <>
              <PageNotFound />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
