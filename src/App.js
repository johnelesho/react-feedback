import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedBackForm from './components/FeedBackForm';
import FeedBackList from './components/FeedBackList';
import FeedBackStats from './components/FeedBackStats';
import Header from './components/Header';
import FeedBackData from './data/FeedBackData';
const App = () => {
  const [feedbacks, setFeedbacks] = useState(FeedBackData);

  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you to delete')) {
      // const feedbacks = feedbacks.
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    console.log(feedback);

    setFeedbacks([feedback, ...feedbacks]);
  };
  return (
    <>
      <Header />
      <div className="container">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackStats feedbacks={feedbacks} />
        <FeedBackList feedbacks={feedbacks} handleDelete={(id) => deleteFeedBack(id)} />
      </div>
      ;
    </>
  );
};

export default App;
