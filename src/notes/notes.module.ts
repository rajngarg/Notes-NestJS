import { DatabaseModule } from './../database/database.module';
import { NotesService } from '../serivce/notes.service';
import { NotesController } from './notes.controller';
import { Module } from '@nestjs/common';
import { NotesProviders } from './notes.providers';


@Module({
    imports: [DatabaseModule],
    controllers: [NotesController],
    providers: [NotesService, ...NotesProviders],
})

export class NotesModule { }