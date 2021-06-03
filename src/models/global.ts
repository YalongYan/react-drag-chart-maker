// import { message } from 'antd';

// import { isEmpty, parseControl, isNull, isUndefined } from '@/utils';

import { ModelState } from '@/config/connect';
import { GlobalModelState } from '@/config/global';
// import { Init_Undep_Controls, Init_Dep_Controls } from '@/config/global.config';
// import { undepControlSelectors, depControlSelectors } from '@/selectors/global';
// import { getControls, addCategory, getControl } from '@/services/global';

interface GlobalModelProp extends ModelState<GlobalModelState> {
  namespace: 'global';
}

const InitialGlobalState: GlobalModelState = {
  list: [1, 2, 3],
};

const GlobalModel: GlobalModelProp = {
  namespace: 'global',
  state: InitialGlobalState,
  effects: {
    // 批量获取控件列表
    fetchUndepControls: function* (
      { payload: { lists = [] } },
      { call, put, select },
    ) {
      console.log(lists);
      // const controls = yield select(undepControlSelectors);
      // const emptyLists: string[] = [];
      yield put({
        type: 'updateUndepControls',
        payload: { list: lists },
      });
    },
  },
  reducers: {
    updateUndepControls: function (state = InitialGlobalState, action) {
      console.log({ ...state, list: { ...action.payload.lists } });
      return { ...state, ...{ list: action.payload.list } };
    },
  },
  subscriptions: {},
};

export default GlobalModel;

// export default {
//   namespace: 'global',
//   state: {
//     menuData: [],
//   },
//   reducers: {
//     setMenuData(state, action) {
//       return { ...state, ...action.payload };
//     },
//   },
//   effects: {
//     *handleSetMenuData1({ payload }, { put }) {
//       yield put({
//         type: 'setMenuData',
//         payload: {
//           menuData: [
//             {
//               key: '/data',
//               title: '报表',
//               icon: 'FormOutlined',
//               children: [
//                 {
//                   key: '/data/effectData',
//                   title: '效果数据',
//                 },
//               ],
//             },
//           ],
//         },
//       });
//     },
//     *handleSetMenuData2({ payload }, { put }) {
//       yield put({
//         type: 'setMenuData',
//         payload: {
//           menuData: [
//             {
//               key: '/launch/fetchNewUser',
//               title: '投放',
//               icon: 'FormOutlined',
//               children: [
//                 {
//                   key: '/launch/fetchNewUser',
//                   title: '拉新',
//                 },
//               ],
//             },
//           ],
//         },
//       });
//     },
//   },
//   subscriptions: {
//     setup({ dispatch, history }) {
//       return history.listen(({ pathname, query }) => {
//         if (pathname.indexOf('/data') > -1) {
//           dispatch({
//             type: 'handleSetMenuData1',
//           });
//         }
//         if (pathname.indexOf('/launch') > -1) {
//           dispatch({
//             type: 'handleSetMenuData2',
//           });
//         }
//       });
//     },
//   },
// };
