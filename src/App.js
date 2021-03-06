import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

import AboutPage from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIcon from './components/AboutIconLink';

const App = () => {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
