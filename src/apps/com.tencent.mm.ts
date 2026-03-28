import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '糖的报单',
      desc: '251201，继续访问，知道了，是否继续上传',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '( @[text="继续访问"] +n * > [desc="申请恢复访问"]) || (@[text="批量上传"] + [text*="知道了"]) ||([text="操作提示"] + [text="上传成功，是否继续上传？"] + * > [text="取消"])',
        },
      ],
    },
  ],
});
