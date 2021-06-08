import React, { useState, useEffect } from 'react';
import componentList from '@/custom-component/componentList';
import './index.less';

const LeftComponentList = () => {
  useEffect(() => {
    //
  }, []);

  const handleDragStart = (e: any) => {
    e.dataTransfer.setData('index', e.target.getAttribute('index'));
  };
  return (
    <div onDragStart={handleDragStart} className="componentList">
      <div className="title">组件列表</div>
      {componentList.map((item, index) => {
        return (
          <div className="cmpCtn" key={index}>
            <img className="img" src={item.iconUrl} />
          </div>
        );
      })}
    </div>
  );
};

export default LeftComponentList;
