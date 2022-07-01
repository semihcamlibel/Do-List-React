import job from "../models/jobmodels.js"


export const createJobs = async (req, res) => {
    try {
        const newJob = new job({
            username: req.body.username,
            dayTitle: req.body.dayTitle,
            jobTitle: req.body.jobTitle,
            jobHour: req.body.jobHour,
        })
        const jobb = await newJob.save();
        res.status(200).json(jobb);
    } catch (err) {
        console.log(err);
    }
};

export const deleteJobs = async (req, res) => {
    const id = req.params.id;
    job.findByIdAndDelete({_id: id}, (err) => {
        if(!err){
            console.log("kayıt silindi");
        }else{
            console.log(err);
        }
    })
};
export const findJobs = async (req, res) => {
    const foundJobs = new job({
        username: req.body.username,
    })
    try {
        const jobs = await job.find({username: foundJobs.username});
        console.log(jobs.username);
        res.status(200).json(jobs);
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

