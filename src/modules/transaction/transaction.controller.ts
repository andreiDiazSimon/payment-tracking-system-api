import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('api')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('get-all-student')
  async getAllStudents() {
    const students = await this.transactionService.getAllStudents();
    return { students };
  }

  @Post('add-transaction')
  async addTransaction(@Body() createTransaction: { studentId: number,
  title: string,
  amount: number}) {
	  try{
		  const transaction = await this.transactionService.create(createTransaction);
		  return { message: 'Transaction added successfully', transaction };
	  }catch(error){
		return {message: 'transaction error'}
	  }
  }


 @Get('student/:studentId')
  async getTransactionsByStudent(@Param('studentId') studentId: number) {
	  console.log(studentId)
  const studentIdInt = parseInt(studentId as any); 
    return this.transactionService.getTransactionsByStudentIddddd(studentIdInt);
  }
}
