import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';

const IndexPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    menuData: state.global.menuData,
  };
};

export default connect(mapStateToProps)(IndexPage);
