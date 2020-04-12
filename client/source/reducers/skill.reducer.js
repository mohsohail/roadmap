import {
  FETCH_SKILLS_INIT,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAILURE,
  ADD_SKILL_INIT,
  ADD_SKILL_SUCCESS,
  ADD_SKILL_FAILURE,
} from '../constants/actions';

const initialState = {
  skillsData: {
    status: 0,
    message: '',
    data: {},
  },
  addSkillData: {
    status: 0,
    message: '',
    data: {},
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SKILLS_INIT:
      return {
        ...state,
        skillsData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        skillsData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case FETCH_SKILLS_FAILURE:
      return {
        ...state,
        skillsData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };
    case ADD_SKILL_INIT:
      return {
        ...state,
        addSkillData: {
          status: 1,
          message: 'init',
          data: {},
        },
      };
    case ADD_SKILL_SUCCESS:
      return {
        ...state,
        addSkillData: {
          status: 2,
          message: 'success',
          data: action.payload,
        },
      };
    case ADD_SKILL_FAILURE:
      return {
        ...state,
        addSkillData: {
          status: 3,
          message: 'failure',
          data: action.payload,
        },
      };
    default:
      return state;
  }
}
