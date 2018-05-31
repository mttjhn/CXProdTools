const tasks = require('../db_apis/tasks.js');
 
async function get(req, res, next) {
  try {
    const context = {};
 
    context.taskNum = parseInt(req.params.taskNum, 10);
 
    const rows = await tasks.find(context);
 
    if (req.params.taskNum) {
      if (rows.length === 1) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).end();
      }
    } else {
      res.status(200).json(rows);
    }
  } catch (err) {
    next(err);
  }
}
 
module.exports.get = get;