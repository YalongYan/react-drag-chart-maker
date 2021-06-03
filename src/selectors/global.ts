import { ConnectState } from '@/config/connect';

export const undepControlSelectors = ({ global }: ConnectState) => {
  return global.undepControls;
};

export const depControlSelectors = ({ global }: ConnectState) => {
  return global.depControls;
};

// appid-渠道号联动
export const appidChannelSelector = ({ global }: ConnectState) => {
  return global.depControls.channel_cost_app_id;
};

// 渠道类型-渠道名称联动
export const cateNameSelector = ({ global }: ConnectState) => {
  return global.depControls.channel_category;
};

export const appidSelector = ({ global }: ConnectState) => {
  return global.undepControls.app_id;
};

export const platformSelector = ({ global }: ConnectState) => {
  return global.undepControls.platform;
};

export const channelNameSelector = ({ global }: ConnectState) => {
  return global.undepControls.channel_name;
};

export const channelCateSelector = ({ global }: ConnectState) => {
  return global.undepControls.channel_category;
};

export const distributionSelector = ({ global }: ConnectState) => {
  return global.undepControls.distribution_name;
};
