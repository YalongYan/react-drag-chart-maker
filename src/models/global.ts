export default {
  namespace: 'global',
  state: {
    menuData: [],
  },
  reducers: {
    setMenuData(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *handleSetMenuData1({ payload }, { put }) {
      yield put({
        type: 'setMenuData',
        payload: {
          menuData: [
            {
              key: '/data',
              title: '报表',
              icon: 'FormOutlined',
              children: [
                {
                  key: '/data/effectData',
                  title: '效果数据',
                },
              ],
            },
          ],
        },
      });
    },
    *handleSetMenuData2({ payload }, { put }) {
      yield put({
        type: 'setMenuData',
        payload: {
          menuData: [
            {
              key: '/launch/fetchNewUser',
              title: '投放',
              icon: 'FormOutlined',
              children: [
                {
                  key: '/launch/fetchNewUser',
                  title: '拉新',
                },
              ],
            },
          ],
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname.indexOf('/data') > -1) {
          dispatch({
            type: 'handleSetMenuData1',
          });
        }
        if (pathname.indexOf('/launch') > -1) {
          dispatch({
            type: 'handleSetMenuData2',
          });
        }
      });
    },
  },
};
