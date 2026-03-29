import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'li.songe.gkd',
  name: 'GKD',
  groups: [
    {
      key: 1,
      name: '删除当前快照，确定',
      desc: '260312',
      rules: [
        {
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '[text="确定删除当前快照吗?"] +n @* > [text="确定"]',
          resetMatch: 'match',
        },
      ],
    },
    {
      key: 2,
      name: '加载失败点击重试',
      desc: '260108',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '@[text="加载失败, 点击重试"] + View',
        },
      ],
    },
    {
      key: 3,
      name: '规则保存到下载',
      desc: '251117，避免在其他菜单中点击',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            '*[childCount=2] > [text="分享到其他应用"] + [text="保存到下载"]',
        },
      ],
    },
    {
      key: 4,
      name: '新版本',
      desc: '251121',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '[text="新版本"] +2 * > [text="取消"] + Button',
        },
      ],
    },
    {
      key: 5,
      name: '删除所有快照，取消',
      desc: '260312',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '[text="确定删除所有快照记录?"] + @* > [text="取消"]',
        },
      ],
    },
  ],
});
