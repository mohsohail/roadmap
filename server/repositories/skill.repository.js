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
    let data = await skillData.save();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

const updateSkill = async ({ skillId }) => {
  try {
    return await SkillModel.update(
      { _id: skillId },
      {
        $set: {},
      }
    );
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
