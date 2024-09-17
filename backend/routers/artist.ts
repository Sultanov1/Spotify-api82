import express from "express";
import Artist from "../models/Artist";
import {imagesUpload} from '../multer';
import {ArtistMutation} from '../types';

const artistRouter = express.Router();

artistRouter.get('/', async (req, res, next) => {
    try {
        const artist  = await Artist.find();

        return res.status(200).json(artist);
    } catch (error) {
        next(error);
    }
})

artistRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
  try  {
    const artistData: ArtistMutation = {
      name: req.body.name,
      image: req.body.image,
      info: req.body.info,
    }

    const artist = new Artist(artistData);
    await artist.save();

    res.send(artist);
  } catch (error) {
    next(error);
  }
})

export default artistRouter;