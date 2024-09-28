import express from 'express';
import cors from 'cors';
import artistRouter from './routers/artist';
import config from './config';
import mongoose from 'mongoose';
import albumRouter from './routers/album';
import trackRouter from './routers/track';
import userRouter from './routers/users';
import trackHistoryRouter from './routers/trackHistory';

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.use('/artists', artistRouter);
app.use('/albums', albumRouter);
app.use('/tracks', trackRouter);
app.use('/users', userRouter);
app.use('/track_history', trackHistoryRouter)

const run = async () => {
  await mongoose.connect(config.mongoose.db);

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  })

  process.on('exit', () => {
    mongoose.disconnect();
  });
}

run().catch((console.error));
