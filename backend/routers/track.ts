import express from "express";
import {imagesUpload} from "../multer";
import Track from "../models/Track";
import Album from "../models/Album";
import {TrackMutation} from '../types';

const trackRouter = express.Router();

trackRouter.get('/', async (req, res, next) => {
  try {
    const artistId = req.query.artist;

    if (artistId) {
      const albums = await Album.find({ artist: artistId });
      const albumIds = albums.map(album => album._id);
      const tracks = await Track.find({ album: albumIds });
      res.send(tracks);
    } else {
      const tracks = await Track.find();
      res.send(tracks);
    }
  } catch (error) {
    next(error);
  }
});

trackRouter.post('/', imagesUpload.single('image'),async (req, res, next) => {
  try {
    const albumData: TrackMutation = {
      name: req.body.name,
      album: req.body.album,
      duration: req.body.duration,
    };

    const track = new Track(albumData);
    await track.save();

    res.send(track);
  } catch (e) {
    next(e);
  }
});

export default trackRouter;