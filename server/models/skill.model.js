const mongoose = require('../config/connection');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  sessions: {
    type: String,
    required: true,
  },
  currentSession: {
    type: String,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  currentDate: {
    type: Date,
    required: true,
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
