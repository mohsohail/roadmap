const express = require('express');
const router = express.Router();

const skill = require('../controllers/skill.controller');
// endpoint - /api/v1/skill/

router.post('/', skill.createSkill);
router.get('/', skill.getAllSkill);
router.get('/:skillId', skill.getSkill);
router.patch('/:skillId', skill.updateSkill);
router.delete('/:skillId', skill.deleteSkill);

module.exports = router;
