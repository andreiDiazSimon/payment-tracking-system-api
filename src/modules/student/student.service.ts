import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  // Create a new student
  async create(createStudent: {username:string, password:string}) {
    const { username, password } = createStudent;
    const student = await this.prisma.student.create({
      data: {
        username,
        password,
      },
    });
    return student;
  }


 // Get all students
  async getAllStudents() {
    return this.prisma.student.findMany(); // This fetches all students from the database
  }
}
