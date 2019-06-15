import { NoteSchema } from './../schemas/notes.schema';
import { Connection } from 'mongoose';

export const NotesProviders = [
  {
    provide: 'NOTE_MODEL',
    useFactory: (connection: Connection) => connection.model('Note', NoteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
