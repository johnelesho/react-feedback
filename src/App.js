import { useState } from 'react';
import FeedBackList from './components/FeedBackList';
import Header from './components/Header';
import FeedBackData from './data/FeedBackData';

const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedBackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackList feedbacks={feedbacks} />
      </div>
      ;
    </>
  );
};

export default App;
