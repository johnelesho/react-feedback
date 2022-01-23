import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
function FeedBackItem({ data, handleDelete }) {
  const { id, rating, text } = data;
  const { deleteFeedBack, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedBack(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(data)}>
        <FaEdit />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedBackItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeedBackItem;
