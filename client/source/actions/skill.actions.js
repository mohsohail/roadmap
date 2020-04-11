import {
  FETCH_SKILLS_INIT,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE,
} from '../constants/actions';

import { processFetchSkills } from '../services/skill.services';

export function fetchSkills() {
  return async function (dispatch) {
    dispatch({
      type: FETCH_SKILLS_INIT,
    });
    const response = processFetchSkills();
    if (!response.error) {
      dispatch({
        type: FETCH_SKILLS_SUCCESS,
        paylaod: response.data,
      });
    } else {
      dispatch({
        type: FETCH_SKILLS_FAILURE,
        paylaod: response.data,
      });
    }
  };
}
