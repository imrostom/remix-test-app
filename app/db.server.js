import mongoose from "mongoose";

mongoose.Promise = global.Promise;

await mongoose.connect('mongodb://localhost:27017/remix-crud')
    .then(() => {
        console.log('Connected!');
    }).catch((err) => {
        console.log(err)
    });

export default mongoose;