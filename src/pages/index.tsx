import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'dva';
import styles from './index.less';

const IndexPage = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({
    //   type: 'data_newer/fetchBriefCard',
    //   payload: {},
    // });
    dispatch({
      type: 'global/fetchUndepControls',
      payload: { lists: [4, 5, 6] },
    });
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    list: state.global.list,
  };
};

export default connect(mapStateToProps)(IndexPage);
