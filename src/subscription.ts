import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 233,
  name: 'azad4ever',
  version: 1,
  author: 'azad4ever',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/azad4ever2nd/mysub',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
