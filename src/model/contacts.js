import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  name: String,
  phone: String,
  mobilephone: String,
});

export default mongoose.model('Contact', ContactSchema);
