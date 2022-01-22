import PropTypes from 'prop-types';
import React from 'react';
function FeedBackStats({ feedbacks }) {
  let average = feedbacks.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0);
  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4> {feedbacks.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedBackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedBackStats;
