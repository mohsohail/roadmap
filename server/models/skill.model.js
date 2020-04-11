const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  trackerType: {
    type: String,
    required: true,
  },
  sessions: {
    type: String,
  },
  currentSession: {
    type: String,
  },
  endDate: {
    type: String,
  },
  currentDate: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: false,
    default: () => new Date(),
  },
  modifiedAt: {
    type: Date,
    required: false,
    default: () => new Date(),
  },
});

module.exports = mongoose.model('Skill', SkillSchema);
