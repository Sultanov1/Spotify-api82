import Artist from './Artist';
import mongoose, {Schema, Types} from 'mongoose';

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    required: true,
    validate: {
      validator: async (value: Types.ObjectId) => {
        const artist = await Artist.findById(value);
        return Boolean(artist);
      },
      message: 'Artist does not exist',
    }
  },
  date: {
    type: Number,
    required: true,
  },
  image: String,
});

const Album = mongoose.model('Album', AlbumSchema);

export default Album;