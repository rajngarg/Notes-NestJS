import { InjectModel } from '@nestjs/mongoose';
import { Note } from './../interfaces/note.interface';
import { Injectable, Inject, Delete } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {

    constructor(@Inject('NOTE_MODEL') private readonly noteModel: Model<Note>) { }

    async create(note: Note): Promise<Note> {
        const newNote = new this.noteModel(note)
        return await newNote.save();
    }

    async findAll(): Promise<Note[]> {
        return await this.noteModel.find().exec();
    }

    async getOne(id: string): Promise<Note> {
        return await this.noteModel.findOne({ _id: id });
    }

    async delete(id: string) {
        await this.noteModel.findByIdAndRemove(id);
        return { message: 'Note Deleted' }
    }

    async update(id: string, note: Note): Promise<Note> {
        return await this.noteModel.findByIdAndUpdate(id, note, { new: true });
    }
}   
