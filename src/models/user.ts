import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  // role: Schema.Types.ObjectId;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  // role: { type: Schema.Types.ObjectId, ref: 'Role', required: false }
});

export default mongoose.model<IUser>('User', UserSchema);
