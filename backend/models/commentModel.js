import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CommentSchema = new Schema({
  comment: [{ content: String, author: String }],
  projectId: String,
});

const CommentModel = mongoose.model('comments', CommentSchema);

export default CommentModel;
