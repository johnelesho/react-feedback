import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedBackData from '../data/FeedBackData';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedBackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    feedback: {},
    edit: false,
  });

  const updateFeedback = (id, updateItem) => {
    setFeedbacks(
      feedbacks.map((item) => (item.id === id ? { ...item, ...updateItem } : item)),
    );
  };

  const editFeedback = (feedback) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    });
  };
  const deleteFeedBack = (id) => {
    if (window.confirm('Are you sure you to delete')) {
      // const feedbacks = feedbacks.
      setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id));
    }
  };

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    // console.log(feedback);

    setFeedbacks([feedback, ...feedbacks]);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        editFeedback,
        addFeedback,
        deleteFeedBack,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
