import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'dva';

import LeftComponentList from '@/components/leftComponentList';

import './index.less';

const IndexPage = (props: any) => {
  console.log(props);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch({
    //   type: 'global/fetchUndepControls',
    //   payload: { lists: [4, 5, 6] },
    // });
  }, []);
  return (
    <div>
      {/* 左侧组件列表 */}
      <LeftComponentList />
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
