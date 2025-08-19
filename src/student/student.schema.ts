import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { HydratedDocument } from "mongoose"


export type StudentDocuments = HydratedDocument<Student>


@Schema({timestamps: true})
export class Student {
    @Prop({required: true})
    name:string

    @Prop({required: true})
    age: number

    @Prop({required: true})
    email: string

    @Prop()
    phoneNumber?: string
}

export const StudentSchema = SchemaFactory.createForClass(Student)