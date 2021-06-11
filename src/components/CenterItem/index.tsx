import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'dva';

import Grid from '@/components/CenterEditor/Grid';

import './index.less';

interface propType {
  subData: Record<string, any>;
}

const CenterItem: React.FC<propType> = (props) => {
  const { subData } = props;
  const { iconUrl, style } = subData;
  return (
    <div className="centerItemCtn" style={style}>
      <img className="itemImg" src={iconUrl} />
    </div>
  );
};

export default CenterItem;
