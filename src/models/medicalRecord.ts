import mongoose, { Schema, Document } from 'mongoose';

interface IMedicalRecord extends Document {
  patient: Schema.Types.ObjectId;
  doctor: Schema.Types.ObjectId;
  details: string;
  testResults: string[];
}

const MedicalRecordSchema: Schema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  details: { type: String, required: true },
  testResults: { type: [String], default: [] }
});

export default mongoose.model<IMedicalRecord>('MedicalRecord', MedicalRecordSchema);
