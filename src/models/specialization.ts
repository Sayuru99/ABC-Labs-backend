import mongoose, { Schema, Document } from 'mongoose';

interface ISpecialization extends Document {
  name: string;
}

const SpecializationSchema: Schema = new Schema({
  name: { type: String, required: true }
});

export default mongoose.model<ISpecialization>('Specialization', SpecializationSchema);
