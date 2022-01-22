import PropTypes from 'prop-types';
import React from 'react';
import FeedBackItem from './FeedBackItem';

function FeedBackList({ feedbacks }) {
  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedBackItem key={feedback.id} data={feedback} />
      ))}
    </div>
  );
}

FeedBackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};
export default FeedBackList;
