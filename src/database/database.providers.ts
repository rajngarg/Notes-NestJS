import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb+srv://rajan:rajan@cluster0-27izw.mongodb.net/test?retryWrites=true&w=majority'),
  },
];
