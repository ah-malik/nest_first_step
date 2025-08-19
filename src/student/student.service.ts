import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './student.schema';
import { Model } from 'mongoose';
import { NOTFOUND } from 'dns';

@Injectable()
export class StudentService {
    constructor (@InjectModel(Student.name)  private  studentModel: Model<Student>){}

    async createStudent(data: Partial<Student>):Promise<Student>{
        const newStudent = new this.studentModel(data)

        return newStudent.save()
    }

    async getAllStudent():Promise<Student[]>{
        return this.studentModel.find().exec()
    }

    async getStudentByID(id : string):Promise<Student | null>{
        const findStudent =  await this.studentModel.findById(id).exec()
        if(!findStudent) throw new NotFoundException("Not Found Student")
        return findStudent
    }

    async updateAllData(id: string, data:Student):Promise<Student>{
        const findStudent =  await this.studentModel.findByIdAndUpdate(id,data, {new:true}).exec()
        if(!findStudent) throw new NotFoundException("Not Found Student")
        return findStudent
    }

    async updateData(id: string, data:Partial<Student>):Promise<Student>{
    const findStudent =  await this.studentModel.findByIdAndUpdate(id,data, {new:true}).exec()
    if(!findStudent) throw new NotFoundException("Not Found Student")
    return findStudent

    }

    async deleteStudent(id: string):Promise<Student>{
        const deleteStudent = await this.studentModel.findByIdAndDelete(id)
            if(!deleteStudent) throw new NotFoundException("Not Found Student")

        return deleteStudent
    }
}
