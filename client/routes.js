import HomePage from './source/pages/Home/HomePage';
import SkillPage from './source/pages/Skill/SkillPage';

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/skills', exact: true, component: SkillPage }
];
