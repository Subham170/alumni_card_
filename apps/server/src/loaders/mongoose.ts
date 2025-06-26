import * as mongoose from 'mongoose';
import { env } from '../config';

const mongooseLoader = async () => {
  const connection = await mongoose.connect(
    `${env.db.url}`
  );

  return connection.connection.db;
};

export default mongooseLoader;
