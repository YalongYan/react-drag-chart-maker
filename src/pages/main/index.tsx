import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'dva';

import { deepCopy } from '@/utils/utils';
import generateID from '@/utils/generateID';
import componentList from '@/custom-component/componentList';

import LeftComponentList from '@/components/LeftComponentList';
import Editor from '@/components/CenterEditor/Main';

import './index.less';
const IndexPage: React.FC = (props: any) => {
  const dispatch = useDispatch();

  console.log(props);
  // const { componentData } = props

  useEffect(() => {
    // dispatch({
    //   type: 'global/fetchUndepControls',
    //   payload: { lists: [4, 5, 6] },
    // });
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    let index: number = parseInt(e.dataTransfer.getData('index'));
    const component = deepCopy(componentList[index]);
    component.style.top = e.nativeEvent.offsetY;
    component.style.left = e.nativeEvent.offsetX;
    component.id = generateID();
    console.log(component);
    dispatch({
      type: 'global/addComponent',
      payload: { component },
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // 改变拖拽的鼠标手势
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // this.$store.commit('setClickComponentStatus', false)
  };
  const deselectCurComponent = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    // if (!this.isClickComponent) {
    //   this.$store.commit('setCurComponent', { component: null, index: null })
    // }
    // // 0 左击 1 滚轮 2 右击
    // if (e.button != 2) {
    //     this.$store.commit('hideContextMenu')
    // }
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      {/* 左侧组件列表 */}
      <LeftComponentList />

      {/* 中间画布 */}
      <div className="center">
        <div
          className="content"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          // onMouseDown={(e) => {
          //   handleMouseDown(e);
          // }}
          // onMouseUp={(e) => {
          //   deselectCurComponent(e);
          // }}
        >
          <Editor />
        </div>
      </div>
      <div style={{ width: '260px' }}>dsdsdsdsdsd</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  // console.log(state);
  return {
    componentData: state.global.componentData,
  };
};

export default connect(mapStateToProps)(IndexPage);
