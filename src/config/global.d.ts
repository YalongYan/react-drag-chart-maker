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
  list: any[];
}

// 拉新控件类型
export type ControlOptionReturn = Array<{
  id: string;
  name: string;
  childSelects?: ControlOptionReturn;
}>;
