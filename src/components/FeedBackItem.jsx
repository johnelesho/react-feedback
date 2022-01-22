import PropTypes from 'prop-types';
import React from 'react';
import Card from './shared/Card';

function FeedBackItem({ data }) {
  const { rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedBackItem;
