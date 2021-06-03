/**
 * dva model相关的类型声明
 */

import { Subscription } from 'dva';
// import { DataNewerModelState } from '@/config/data.newer';
// import { ChannelModelState } from '@/config/launch.channel';
// import { CostModelState } from '@/config/launch.cost';
// import { LaunchEffectModelState } from '@/config/launch.effect';
// import { LaunchAccountModelState } from '@/config/launch.account';
// import { LaunchEquipmentModelState } from '@/config/launch.equipment';
import { GlobalModelState } from '@/config/global';

/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: (...args: any[]) => void;
  [key: string]: any;
}) => any;

export interface AnyAction {
  type: string;
  payload: Record<string, any>;
  callback?: (...args: any[]) => void;
}

export interface EffectsCommandMap {
  put: (action: AnyAction) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;
  [key: string]: any;
}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;

export type Reducer<ST = any, AT = AnyAction> = (state: ST, action: AT) => ST;

export interface ModelState<MST> {
  namespace: string;
  state: MST;
  effects: Record<string, Effect>;
  reducers: Record<string, Reducer<MST>>;
  subscriptions: Record<string, Subscription>;
}

export interface ConnectState {
  global: GlobalModelState;
  // data_newer: DataNewerModelState;
  // launch_channel: ChannelModelState;
  // launch_cost: CostModelState;
  // launch_effect: LaunchEffectModelState;
  // launch_account: LaunchAccountModelState;
  // launch_equipment: LaunchEquipmentModelState;
  // loading: {
  //   effects: {
  //     [key: string]: boolean;
  //   };
  // };
}
