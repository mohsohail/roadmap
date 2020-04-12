import { FETCH_SKILLS, ADD_SKILL, FETCH_SKILL, UPDATE_SKILL } from '../constants/endpoints';
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

export const processFetchSkill = async (payload) => {
  const request = {
    url: 'http://localhost:8000' + FETCH_SKILL(payload),
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

export const processUpdateSkill = async (payload) => {
  console.log(payload);
  const request = {
    url: 'http://localhost:8000' + UPDATE_SKILL(payload),
    method: 'patch',
    data: payload,
  };
  const response = await callAPI(request);
  if (!response.err) {
    return response;
  } else {
    return { err: true };
  }
};
