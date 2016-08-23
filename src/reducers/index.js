import { combineReducers } from 'redux';
import experience from './experience_reducer';
import education from './education_reducer';
import projects from './projects_reducer';
import skills from './skills_reducer';

const resume = combineReducers({
  experience,
  education,
  projects,
  skills,
});

export default resume;
