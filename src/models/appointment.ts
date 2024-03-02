import mongoose, { Schema, Document } from 'mongoose';

interface IAppointment extends Document {
  patient: Schema.Types.ObjectId;
  special_note: string;
  doctor: Schema.Types.ObjectId;
  appointmentDate: Date;
}

const AppointmentSchema: Schema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  special_note: {type: String, required: false},
  doctor: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
  appointmentDate: { type: Date, required: true }
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
