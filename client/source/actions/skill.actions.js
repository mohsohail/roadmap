import {
  FETCH_SKILLS_INIT,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE,
  ADD_SKILL_INIT,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
} from '../constants/actions';

import { processFetchSkills, processAddSkill } from '../services/skill.services';

export function fetchSkills() {
  return async (dispatch) => {
    dispatch({
      type: FETCH_SKILLS_INIT,
    });
    const response = await processFetchSkills();
    if (!response.err) {
      dispatch({
        type: FETCH_SKILLS_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: FETCH_SKILLS_FAILURE,
        payload: response.data,
      });
    }
  };
}

export const addSkillAction = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_SKILL_INIT,
  });
  const response = await processAddSkill(formData);
  if (!response.err) {
    dispatch({
      type: ADD_SKILL_SUCCESS,
      payload: response.data,
    });
  } else {
    dispatch({
      type: ADD_SKILL_FAILURE,
    });
  }
};
