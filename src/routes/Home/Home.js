import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';

function Home() {
  return (

    <div>
      <p>Home!!!</p>
    </div>
  );
}

Home.propTypes = {
};

export default connect()(Home);
