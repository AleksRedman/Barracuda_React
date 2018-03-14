import React from 'react';
import styles from './Contacts.css';



const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a href="tel:+380631543556" className={styles.contacts__tel}>
        +38 063 154 35 56
      </a>
      
    </div>
  );
};

Contacts.propTypes = {
};

export default Contacts;
