import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  // Fetch all students
  async getAllStudents() {
    return this.prisma.student.findMany();
  }

  // Create a new transaction
  async create(createTransaction: { studentId: number,
  title: string,
  amount: number}) {
    const { studentId, title, amount } = createTransaction;
    const transaction = await this.prisma.transaction.create({
      data: {
        studentId,
        title,
        amount,
        date: new Date(),
      },
    });
    return transaction;
  }


  async getTransactionsByStudentId(studentId: number) {
    return this.prisma.transaction.findMany({
      where: { studentId },
      orderBy: { date: 'desc' }, // Sort transactions by date, descending
    });
  }


  // Fetch transactions by student ID
  async getTransactionsByStudentIddddd(studentId: number) {
    return this.prisma.transaction.findMany({
      where: { studentId: studentId },
    });
  }

}
