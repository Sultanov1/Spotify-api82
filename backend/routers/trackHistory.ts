import express from 'express';
import User from '../models/User';
import TrackHistory from '../models/TrackHistory';

const trackHistoryRouter = express.Router();

trackHistoryRouter.post('/', async (req, res, next) => {
  try {
    const headerValue = req.get('Authorization');

    if (!headerValue) {
      return res.status(401).send({error: 'Header "Authorization" not found'});
    }

    const [_bearer, token] = headerValue.split(' ');

    if (!token) {
      return res.status(401).send({error: 'Token not found'});
    }

    const user = await User.findOne({token});

    if (!user) {
      return res.status(401).send({error: 'Token not found'});
    }

    const trackHistory = new TrackHistory({
      trackId: req.body.trackId,
      user: user._id,
    })

    await trackHistory.save();
    return res.send(trackHistory)
  } catch (error) {
    next(error);
  }
});

export default trackHistoryRouter;