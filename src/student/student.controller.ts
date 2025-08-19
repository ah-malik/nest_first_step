import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('student')
export class StudentController {
    constructor (private readonly studentSerives: StudentService){}


    @Post()
    async addStudent(@Body() data: Partial<Student>){
        return this.studentSerives.createStudent(data)
    }

     @Get(':id')
    async getStudentByID(@Param('id') id : string ){
        return this.studentSerives.getStudentByID((id))
    }

    @Get()
    async getStudent(){
        return this.studentSerives.getAllStudent()
    }

    @Put(':id')
    async updateAllData(@Param('id') id :string, @Body() data: Student){
        return this.studentSerives.updateAllData(id,data)
    }

    
    @Patch(':id')
    async updateData(@Param('id') id :string, @Body() data: Partial<Student>){
        return this.studentSerives.updateData(id,data)
    }

    @Delete(':id')
    async deleteStudent(@Param("id") id:string){
        return this.studentSerives.deleteStudent(id)
    }
}
