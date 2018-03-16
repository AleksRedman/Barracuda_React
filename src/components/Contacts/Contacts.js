import React from 'react';
import styles from './Contacts.css';
import { Icon } from 'antd';



const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="tel:+380631543556" className={styles.contacts__tel}>
        +38 063 154 35 56
      </a>
      <div className={styles.contacts__socials_wrap}>
        <a
          href="https://www.facebook.com/" target="_blank"
          rel="noopener noreferrer"
          className={styles.contacts__socials}>
          <Icon type="facebook" className={styles.contacts__icon}/>
        </a>
        <a href="https://plus.google.com/"
          target="_blank" rel="noopener noreferrer"
          className={styles.contacts__socials}>
          <Icon type="google-plus" className={styles.contacts__icon}/>
        </a>
        <a href="https://www.amazon.com/"
          target="_blank" rel="noopener noreferrer" 
          className={styles.contacts__socials}>
          <Icon type="amazon" className={styles.contacts__icon}/>
        </a>
      </div>
    </div>
  );
};

Contacts.propTypes = {
};

export default Contacts;
