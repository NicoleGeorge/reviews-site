import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';

import AboutPage from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIcon from './components/AboutIconLink';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

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
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
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
