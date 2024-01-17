import db from "../db.server"

const { model, Schema } = db;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

const User = db.models.User || model('User', UserSchema);

export default User;
