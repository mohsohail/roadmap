const SkillModel = require('../models/Skill.model');

const getAllSkill = async () => {
  try {
    return await SkillModel.find({});
  } catch (e) {
    throw e;
  }
};

const getSkill = async ({ skillId }) => {
  try {
    return await SkillModel.findById(skillId);
  } catch (e) {
    throw e;
  }
};

const getSkillViaUrl = async ({ urlId }) => {
  try {
    return await SkillModel.findOne({ urlId });
  } catch (e) {
    throw e;
  }
};

const createSkill = async (payload) => {
  try {
    const skillData = new SkillModel(payload);
    return await skillData.save();
  } catch (err) {
    throw err;
  }
};

const updateSkill = async (payload) => {
  try {
    return await SkillModel.findOneAndUpdate({ _id: payload._id }, payload, { new: true });
  } catch (e) {
    throw e;
  }
};

const deleteSkill = async ({ skillId }) => {
  try {
    return await SkillModel.remove({ _id: skillId });
  } catch (e) {
    throw e;
  }
};

module.exports = {
  createSkill,
  getAllSkill,
  getSkill,
  getSkillViaUrl,
  updateSkill,
  deleteSkill,
};
