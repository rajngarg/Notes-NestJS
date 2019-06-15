import { Document } from 'mongoose'

export interface Note extends Document {
    readonly id?: String;
    readonly title: String;
    readonly note: String;
}
