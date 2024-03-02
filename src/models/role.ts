import mongoose, { Schema, Document } from 'mongoose';

enum UserRole {
  ADMIN = 'admin',
  STAFF = 'staff',
  CONSULTANT = 'consultant'
}

interface IRole extends Document {
  name: UserRole;
  permissions: string[];
}

const RoleSchema: Schema = new Schema({
  name: { type: String, enum: Object.values(UserRole), required: true },
  permissions: { type: [String], required: true }
});

export { UserRole };

export default mongoose.model<IRole>('Role', RoleSchema);
