export const FETCH_SKILLS = '/api/v1/skills/';
export const ADD_SKILL = '/api/v1/skills/';
export const FETCH_SKILL = ({ id }) => {
  return `/api/v1/skills/${id}`;
};
export const UPDATE_SKILL = ({ _id }) => {
  return `/api/v1/skills/${_id}`;
};
