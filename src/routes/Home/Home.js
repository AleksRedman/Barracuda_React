import React from 'react';
import { connect } from 'dva';
import Big_slider from '../../components/Big_slider/Big_slider.js';
import styles from './Home.css';

function Home() {
  return (
    <div className={styles.home}>
      <Big_slider/>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
