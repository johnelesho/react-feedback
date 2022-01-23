import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import Header from './components/Header';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              exact
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
        ;
      </Router>
    </FeedbackProvider>
  );
};

export default App;
