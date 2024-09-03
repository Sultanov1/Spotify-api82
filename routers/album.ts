import express from 'express';
import Album from '../models/Album';
import {AlbumMutation} from '../types';
import {imagesUpload} from '../multer';

const albumRouter = express.Router();

albumRouter.get('/', async (req, res, next) => {
  try {
    const artistId = req.query.artist as string;
    let albums;

    if (!artistId) {
      albums = await Album.find();
    } else {
      albums = await Album.find({artist: artistId})
    }

    res.send(albums);
  } catch (error) {
    next(error);
  }
})

albumRouter.get('/:id', async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id).populate('artist').exec();

    if (!album) {
      res.status(404).json({error: 'Album not found'});
    }

  } catch (error) {
    next(error);
  }
})

albumRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
  try {
    const albumData: AlbumMutation = {
      name: req.body.name,
      artist: req.body.artist,
      date: req.body.date,
      image: req.file ? req.file.filename : null,
    };

    const album = new Album(albumData);
    await album.save();

    res.send(album);
  } catch (error) {
    next(error);
  }
});


export default albumRouter