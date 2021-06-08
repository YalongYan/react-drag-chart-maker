import { YOptionType, YOptionTypeWithChild } from '@/config/comp';

// 无依赖控件
export type UndepControlList = {
  app_id: YOptionType[];
  channel_name: YOptionType[];
  company_name: YOptionType[];
  category_name: YOptionType[];
  channel_category: YOptionType[];
  distribution_name: YOptionType[];
  platform: YOptionType[];
};

export type DepControlList = {
  channel_cost_app_id: YOptionTypeWithChild[];
  channel_category: YOptionTypeWithChild[];
};

export interface GlobalModelState {
  canvasStyleData: {
    width: number;
    height: number;
    scale: number;
  };
  componentData: any[]; // 画布组件数据
  curComponent: any;
  curComponentIndex: any;
  // 点击画布时是否点中组件，主要用于取消选中组件用。
  // 如果没点中组件，并且在画布空白处弹起鼠标，则取消当前组件的选中状态
  isClickComponent: boolean;
}

// 拉新控件类型
export type ControlOptionReturn = Array<{
  id: string;
  name: string;
  childSelects?: ControlOptionReturn;
}>;
