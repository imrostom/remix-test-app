import mongoose from "mongoose";

mongoose.Promise = global.Promise;

console.log(process.env.DATABASE_URL, 'dd');

await mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log('Connected!');
    }).catch((err) => {
        console.log(err)
    });

export default mongoose;