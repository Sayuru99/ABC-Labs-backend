import mongoose, { Schema, Document } from 'mongoose';

interface IDoctor extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  specialization: Schema.Types.ObjectId;
}

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  specialization: { type: Schema.Types.ObjectId, ref: 'Specialization', required: true }
});

export default mongoose.model<IDoctor>('Doctor', DoctorSchema);
