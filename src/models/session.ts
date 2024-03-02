import mongoose, { Schema, Document } from 'mongoose';

interface ISession extends Document {
  doctor: Schema.Types.ObjectId;
  sessionDate: Date;
  sessionDuration: number;
  maxPatients: number;
  currentAppointments: number;
  ongoingAppointmentNumber: number;
}

const SessionSchema: Schema = new Schema({
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  sessionDate: { type: Date, required: true },
  sessionDuration: { type: Number, required: true },
  maxPatients: { type: Number, required: true },
  currentAppointments: { type: Number, default: 0 },
  ongoingAppointmentNumber: { type: Number, default: 0 }
});

export default mongoose.model<ISession>('Session', SessionSchema);
