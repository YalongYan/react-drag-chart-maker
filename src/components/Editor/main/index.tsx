import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'dva';

import Grid from '@/components/Editor/Grid';

import './index.less';

interface propType {
  componentData?: any[];
}

const Index: React.FC<propType> = (props) => {
  const { componentData } = props;
  useEffect(() => {
    console.log(componentData);
  }, [componentData]);

  const handleMouseDown = () => {};
  return (
    <div className="editor" id="editor" onMouseDown={handleMouseDown}>
      <Grid />
      {/* 页面组件列表展示 */}
      {/* <component
                v-else
                class="component"
                :is="item.component"
                :style="getComponentStyle(item.style)"
                :propValue="item.propValue"
                @input="handleInput"
                :element="item"
                :id="'component' + item.id"
            /> */}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    componentData: state.global.componentData,
  };
};

export default connect(mapStateToProps)(Index);
