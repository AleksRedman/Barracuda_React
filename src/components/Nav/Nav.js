import React from 'react';
import { Menu } from 'antd';
import { Link } from 'dva/router';
import styles from './Nav.css';



const Nav = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className={styles.nav}
        theme="dark"
      >
        <Menu.Item className={styles.nav__item} key="1">
          < Link to="/" className={styles.nav__link}>Home</Link>
        </Menu.Item>
        <Menu.Item className={styles.nav__item} key="2">
          < Link to="/Goods" className={styles.nav__link}>Goods</Link>
        </Menu.Item>
        <Menu.Item className={styles.nav__item} key="3">
          < Link to="/Feedback" className={styles.nav__link}>Feedback</Link>
        </Menu.Item>
        <Menu.Item className={styles.nav__item} key="4">
          < Link to="/About_us" className={styles.nav__link}>About us</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

Nav.propTypes = {
};

export default Nav;
