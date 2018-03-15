import React from 'react';
import { connect } from 'dva';
import styles from './Goods.css';

function Goods() {
  return (
    <div>
      <p>Goods!!!</p>
    </div>
  );
}

Goods.propTypes = {
};

export default connect()(Goods);
