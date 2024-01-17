import db from "../db.server"

const { model, Schema } = db;


const PostSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
});

const Post = db.models.Post || model('Post', PostSchema);

export default Post;
