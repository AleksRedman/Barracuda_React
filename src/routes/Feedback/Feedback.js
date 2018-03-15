import React from 'react';
import { connect } from 'dva';
import styles from './Feedback.css';

function Feedback() {
  return (
    <div>
      <p>Feedback!!!</p>
    </div>
  );
}

Feedback.propTypes = {
};

export default connect()(Feedback);
