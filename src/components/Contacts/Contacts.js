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
        <Icon type="facebook" className={styles.contacts__socials}/>
        <Icon type="google" className={styles.contacts__socials}/>
        <Icon type="amazon" className={styles.contacts__socials}/>
      </div>
    </div>
  );
};

Contacts.propTypes = {
};

export default Contacts;
