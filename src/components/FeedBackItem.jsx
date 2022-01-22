import PropTypes from 'prop-types';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
function FeedBackItem({ data, handleDelete }) {
  const { rating, text } = data;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => handleDelete(data.id)}>
        <FaTimes color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedBackItem;
