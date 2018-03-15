import React from 'react';
import { connect } from 'dva';
import styles from './About_us.css';

function About_us() {
  return (
    <div>
      <p>About us!!!</p>
    </div>
  );
}

About_us.propTypes = {
};

export default connect()(About_us);
