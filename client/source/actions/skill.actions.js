import {
  FETCH_SKILLS_INIT,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE,
} from '../constants/actions';

import { processFetchSkills } from '../services/skill.services';

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
