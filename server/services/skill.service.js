const skillRepo = require('../repositories/skill.repository');

const createSkill = async (payload) => {
  try {
    let skillData = await skillRepo.createSkill(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: skillData,
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500,
    };
  }
};

const getAllSkill = async () => {
  try {
    let skills = await skillRepo.getAllSkill();
    return {
      err: false,
      message: 'success',
      status: 200,
      data: skills,
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500,
    };
  }
};

const getSkill = async (payload) => {
  try {
    let skill = await skillRepo.getSkill(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: skill,
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500,
    };
  }
};

const updateSkill = async (payload) => {
  try {
    let skill = await skillRepo.updateSkill(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: skill,
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500,
    };
  }
};

const deleteSkill = async (payload) => {
  try {
    let skill = await skillRepo.deleteSkill(payload);
    return {
      err: false,
      message: 'success',
      status: 200,
      data: skill,
    };
  } catch (err) {
    return {
      err: true,
      message: 'failed',
      status: 500,
    };
  }
};

module.exports = {
  createSkill,
  getAllSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};
