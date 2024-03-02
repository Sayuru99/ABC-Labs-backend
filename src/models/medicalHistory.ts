import mongoose, { Schema, Document } from 'mongoose';

interface IMedicalHistory extends Document {
  patient: Schema.Types.ObjectId;
  details: string;
}

const MedicalHistorySchema: Schema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  details: { type: String, required: true }
});

export default mongoose.model<IMedicalHistory>('MedicalHistory', MedicalHistorySchema);
