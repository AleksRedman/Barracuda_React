import React from 'react';
import styles from './Copyrights.css';



const Copyrights = () => {
  return (
    <div className={styles.copyrights}>
      <p className={styles.copyrights__text}>© 2017 Barracuda. All rights reserved</p>
    </div>
  );
};

Copyrights.propTypes = {
};

export default Copyrights;
