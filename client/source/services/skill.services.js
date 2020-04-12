import { FETCH_SKILLS, ADD_SKILL } from '../constants/endpoints';
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

export const processAddSkill = async (formData) => {
  const request = {
    url: 'http://localhost:8000' + ADD_SKILL,
    method: 'post',
    headers: {},
    data: formData,
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response;
  } else {
    return { err: true };
  }
};
