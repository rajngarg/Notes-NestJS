import { Note } from './../interfaces/note.interface';
import { NotesService } from './../serivce/notes.service';
import { CreateNoteDto, UpdateNoteDto } from './../dto/noteDto';
import { Controller, Get, Post, Delete, Put, Body, Param } from '@nestjs/common';

@Controller('notes')
export class NotesController {

	constructor(private readonly noteService: NotesService) { }

	@Get()
	async findAll(): Promise<Note[]> {
		return this.noteService.findAll()
	}

	@Get(':id')
	async getOne(@Param('id') id): Promise<Note> {
		return this.noteService.getOne(id)
	}

	@Post()
	async create(@Body() createNoteDto: CreateNoteDto): Promise<Note> {
		return this.noteService.create(createNoteDto);
	}

	@Put(':id')
	update(@Body() updateNoteDto: UpdateNoteDto, @Param('id') id) {
		return this.noteService.update(id,updateNoteDto)
	}

	@Delete(':id')
	delete(@Param('id') id) {
		return this.noteService.delete(id)
	}
}
