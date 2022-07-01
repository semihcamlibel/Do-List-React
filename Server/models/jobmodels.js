import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    username: String,
    dayTitle: String,
    jobTitle: String,
    jobHour: String,
});

const job = mongoose.model('Job', jobSchema);

export default job;