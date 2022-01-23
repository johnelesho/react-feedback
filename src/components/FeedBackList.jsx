import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedBackItem from './FeedBackItem';

function FeedBackList() {
  const { feedbacks } = useContext(FeedbackContext);

  if (!feedbacks || feedbacks.length === 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedbacks.map((feedback) => (
          <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={feedback.id} data={feedback} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
//   return (
//     <div className="feedback-list">
//       {feedbacks.map((feedback) => (
//         <FeedBackItem key={feedback.id} data={feedback} handleDelete={handleDelete} />
//       ))}
//     </div>
//   );
// FeedBackList.propTypes = {
//   feedbacks: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     }),
//   ),
// };
export default FeedBackList;
