import { FETCH_SKILLS } from '../constants/endpoints';
import { callAPI } from '../utils/api.utils';

export const processFetchSkills = async () => {
  const request = {
    url: 'http://localhost:8000' + FETCH_SKILLS,
    method: 'get',
    headers: {},
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response;
  } else {
    return { err: true };
  }
};
