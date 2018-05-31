const database = require('../services/database.js');
 
const baseQuery = 
 `select
    t.ObjectId "ObjectId", 
    trim(t.DisplayFormat) "DisplayFormat", 
    t.Client "Client",
    t.Path "TaskPath",
    t.EffortEstimateCurrent "Estimate",
    t.EffortToDateTotal "Effort",
    case when t.StatusName = 'COMP' then
      100
    when t.EffortToDateTotal = 0 then
      0
    else
      ROUND((t.EffortToDateTotal / t.EffortEstimateCurrent)*100)
    end "PercentComplete",
    case when t.StatusName = 'COMP' then
      0
    when (t.EffortEstimateCurrent - t.EffortToDateTotal) < 0 then
      0
    else
      t.EffortEstimateCurrent - t.EffortToDateTotal
    end "RemainingHours",
    t.Developer "Developer",
    t.CrossTester "CrossTester",
    t.StatusDescription "Status"
  from query.j_Task t
  where t.ExternalFileNum like to_char(:task_number, 'FM000000')`;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.taskNum) {
    binds.task_number = context.taskNum;

    const result = await database.simpleExecute(query, binds);
    return result.rows;
  }

 return {}; 
  
}
 
module.exports.find = find;