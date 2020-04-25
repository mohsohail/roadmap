const skillService = require('../services/skill.service');

const createSkill = async (req, res) => {
  try {
    let payload = {};
    payload = { ...req.body };
    if (payload.trackerType === 'simple') {
      payload.currentSession = 0;
    }
    const response = await skillService.createSkill(payload);
    return res.status(200).send(response);
  } catch (e) {
    res.status(500).send(err);
  }
};

const getAllSkill = async (req, res) => {
  console.log('comes');
  try {
    const response = await skillService.getAllSkill();
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getSkill = async (req, res) => {
  try {
    const payload = req.params;
    const response = await skillService.getSkill(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateSkill = async (req, res) => {
  try {
    let payload = {
      _id: req.params.id,
      ...req.body,
    };
    const response = await skillService.updateSkill(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteSkill = async (req, res) => {
  try {
    const payload = req.params;
    const response = await skillService.deleteSkill(payload);
    return res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createSkill,
  getAllSkill,
  getSkill,
  updateSkill,
  deleteSkill,
};
