
const models = require('../models'); 
function save(req,res){
    const task = {
        t_name: req.body.t_name,
        assigned_date: req.body.  assigned_date,
        status: req.body.status,
        user_id: req.body.user_id,
        completed_date: req.body.completed_date,
        assigned_by: req.body.assigned_by,
        id:1
    }
    models.task.create(task).then(result=>{
        res.status(201).jeson({
            message: "task created secsussfully",
            task:result
        });
    }).catch(error => {
        res.status(500).jeson({
            message: "task is not created secsussfully",
            error:error
        });

    });
}
module,exports = {
    save :save
  
}