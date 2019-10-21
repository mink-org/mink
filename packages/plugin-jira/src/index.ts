import Assigned from './components/assigned';
import Board from './components/board';
import Versions from './components/versions';

export const pluginName = 'Jira';

export const navigation = [
  { name: 'Board', component: Board },
  { name: 'Issues', component: Assigned },
  { name: 'Versions', component: Versions },
];
