import { Schema, model, Types } from 'mongoose';
import User from './User';
import Track from './Track';
import Artist from './Artist';
import { TracksHistory } from '../types';

const TrackHistorySchema = new Schema({
  track: {
    type: Schema.Types.ObjectId,
    ref: 'Track',
    required: true,
    validate: {
      validator: async (value: Types.ObjectId): Promise<boolean> => {
        const track = await Track.findById(value);
        return !!track;
      },
      message: 'Track does not exist!',
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: async (value: Types.ObjectId): Promise<boolean> => {
        const user = await User.findById(value);
        return !!user;
      },
      message: 'User does not exist!',
    },
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
    validate: {
      validator: async (value: Types.ObjectId): Promise<boolean> => {
        const artist = await Artist.findById(value);
        return !!artist;
      },
      message: 'Artist does not exist!',
    },
  },
  date: {
    type: String,
    required: true,
  },
});

const TrackHistory = model<TracksHistory>('TrackHistory', TrackHistorySchema);

export default TrackHistory;
