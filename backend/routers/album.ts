import express from 'express';
import Album from '../models/Album';
import {imagesUpload} from '../multer';
import mongoose from 'mongoose';
import auth from '../middleware/auth';

const albumRouter = express.Router();

albumRouter.get('/', async (req, res, next) => {
  try {
    const artist = req.query.artist as string;

    if (!artist) {
     const albums = await Album.find().populate('artist', 'name');
     return res.send(albums);
    }

    const albums = await Album.find({ artist, isPublished: true })
      .sort({ date: -1 })
      .populate('artist', 'name');

    return res.send(albums);
  } catch (error) {
    next(error);
  }
});

albumRouter.get('/:id', async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id).populate('artist').exec();

    if (!album) {
      return res.status(404).json({error: 'Album not found'});
    }

    return res.send(album);
  } catch (error) {
    next(error);
  }
})

albumRouter.post('/', auth, imagesUpload.single('image'), async (req, res, next) => {
  try {
    const albumData = new Album ({
      name: req.body.name,
      artist: req.body.artist,
      date: req.body.date,
      image: req.file ? 'images/' + req.file.filename : null,
    });

    await albumData.save();

    return res.send(albumData);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).send(error);
    }
    next(error);
  }
});


export default albumRouter