import mongoose from 'mongoose';
import config from './config';
import Artist from './models/Artist';
import Album from './models/Album';
import Track from './models/Track';

const dropCollection = async (db: mongoose.Connection, collectionName: string) => {
  try {
    await db.dropCollection(collectionName);
  } catch (e) {
    console.log('Skipping drop...')
  }
};

const run = async () => {
  await mongoose.connect(config.mongoose.db)
  const db = mongoose.connection

  const collections = ['users', 'tasks'];

  for (const collectionName of collections) {
    await dropCollection(db, collectionName);
  }

  const drake = await Artist.create({
    name: 'Drake',
    image: 'images/16a6da22-0f48-49a7-8b2f-f63dff5a7c19.jpeg',
    info: 'rapper, singer, actor',
  });

  const centralCee = await Artist.create({
    name: 'Central Cee',
    image: 'images/0f5a6c2d-4837-4202-bcff-6e4d54f2f81a.jpeg',
    info: 'Famous UK rapper',
  });

  const albumCertifiedLoverBoy = await Album.create({
    name: 'Certified lover boy',
    artist: drake._id,
    date: '2021',
    image: 'images/16a6da22-0f48-49a7-8b2f-f63dff5a7c19.jpeg',
  });

  const albumTakeCare = await Album.create({
    name: 'Take care',
    artist: drake._id,
    date: '2011',
    image: 'images/55abfa88-b375-4a63-997e-1927cde7c119.jpg',
  })

  const albumWildWest = await Album.create({
    name: 'Wild west',
    artist: centralCee._id,
    date: '2021',
    image: 'images/7a9c46cf-b751-4797-9a4c-ecb8a75c186c.jpeg',
  });

  const albumTwentyThree = await Album.create({
    name: '23',
    artist: centralCee._id,
    date: 2022,
    image: 'images/383bf3f1-3760-4842-92b7-a1df6ed56a7e.jpeg'
  });

  await Track.create({
      name: 'Champaign poetry',
      album: albumCertifiedLoverBoy._id,
      duration: '5:36',
      number: 1,
    }, {
      name: 'Papi\'s Home',
      album: albumCertifiedLoverBoy._id,
      duration: '2:58',
      number: 2,
    }, {
      name: 'Girls want girls',
      album: albumCertifiedLoverBoy._id,
      duration: '3:42',
      number: 3,
    }, {
      name: 'In the bible',
      album: albumCertifiedLoverBoy._id,
      duration: '4:57',
      number: 4,
    }, {
      name: 'Love All',
      album: albumCertifiedLoverBoy._id,
      duration: '3:49',
      number: 5,
    }, {
      name: 'Over my dead body',
      album: albumTakeCare._id,
      duration: '4:33',
      number: 1,
    }, {
      name: 'Headlines',
      album: albumTakeCare._id,
      duration: '3:56',
      number: 2,
    }, {
      name: 'Shot for me',
      album: albumTakeCare._id,
      duration: '3:45',
      number: 3,
    }, {
      name: 'Crew Love',
      album: albumTakeCare._id,
      duration: '3:29',
      number: 4,
    }, {
      name: 'Take Care',
      album: albumTakeCare._id,
      duration: '4:38',
      number: 5,
    }, {
      name: '6 for 6',
      album: albumWildWest._id,
      duration: '2:37',
      number: 1,
    }, {
      name: 'Fraud',
      album: albumWildWest._id,
      duration: '2:32',
      number: 2,
    }, {
      name: 'Pinging (6 figures)',
      album: albumWildWest._id,
      duration: '2:54',
      number: 3,
    }, {
      name: 'The bag',
      album: albumWildWest._id,
      duration: '2:52',
      number: 4
    }, {
      name: 'Day in the life',
      album: albumWildWest._id,
      duration: '3:09',
      number: 5,
    }, {
      name: 'Khabib',
      album: albumTwentyThree._id,
      duration: '3:20',
      number: 1,
    }, {
      name: 'Straight back to it',
      album: albumTwentyThree._id,
      duration: '3:17',
      number: 2,
    }, {
      name: 'Ungrateful',
      album: albumTwentyThree._id,
      duration: '2:54',
      number: 3,
    },
    {
      name: 'Bunda',
      album: albumTwentyThree._id,
      duration: '1:52',
      number: 4,
    }, {
    name: 'Retail Therapy',
      album: albumTwentyThree._id,
      duration: '2:56',
      number: 5,
    }
  )
  await db.close();
};

run().catch(console.error);

