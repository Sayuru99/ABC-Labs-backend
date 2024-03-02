import mongoose, { Schema, Document } from 'mongoose';

interface IPatient extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  createdBy: Schema.Types.ObjectId;
  updatedBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const PatientSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model<IPatient>('Patient', PatientSchema);
