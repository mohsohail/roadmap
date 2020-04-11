import HomePage from './source/pages/Home/HomePage';
import SkillPage from './source/pages/Skill/SkillPage';
import AddSkillPage from './source/pages/AddSkill/AddSkillPage';

export default [
  { path: '/', exact: true, component: HomePage },
  { path: '/add-skills', exact: true, component: AddSkillPage },
  { path: '/skills', exact: true, component: SkillPage },
];
