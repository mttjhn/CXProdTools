const express = require('express');
const router = new express.Router();
const tasks = require('../controllers/tasks.js');
 
router.route('/tasks/:taskNum?')
  .get(tasks.get);
 
module.exports = router;