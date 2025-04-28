import { Controller, Post, Body, Get } from '@nestjs/common';
import { StudentService } from './student.service';
import { TransactionService } from '../transaction/transaction.service';

@Controller('api')
export class StudentController {
  constructor(private readonly studentService: StudentService,     private transactionService: TransactionService,
) {}

  @Post('add-student')
  async addStudent(@Body() createStudent: {username: string, password: string}) {
    try {
      const student = await this.studentService.create(createStudent);
      return { message: 'Student added successfully'};
    } catch (error) {
      return { message: 'Failed to add student', error: error.message };
    }
  }

  // Endpoint to get all students along with their transactions
  @Get('with-transactions')
  async getStudentsWithTransactions() {
    const students = await this.studentService.getAllStudents();
    for (let student of students) {
      ( student as any ).transactions = await this.transactionService.getTransactionsByStudentId(student.id);
    }
    return students;
  }

}
