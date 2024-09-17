import mongoose, {model, Types} from 'mongoose';
import User from './User';
import {TracksHistory} from '../types';

const Schema = mongoose.Schema;

const TrackHistorySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const user = await User.findById(value);
        return Boolean(user);
      },
      message: 'User does not exist!',
    }
  },
  trackId: {
    type: Schema.Types.ObjectId,
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const track = await User.findById(value);
        return Boolean(track);
      },
      message: 'Track does not exist',
    }
  },
  datetime: {
    type: Date,
    default: () => new Date,
  }
});

const TrackHistory = model<TracksHistory>('TrackHistory', TrackHistorySchema);

export default TrackHistory;