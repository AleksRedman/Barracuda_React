import React from 'react';
import logo from '../../assets/Logo.png';
import styles from './Logo.css';



const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt={"logo"} className={styles.logo__img}/>
    </div>
  );
};

Logo.propTypes = {
};

export default Logo;
