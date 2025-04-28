import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInController } from './modules/sign-in/sign-in.controller';
import { SignInService } from './modules/sign-in/sign-in.service';
import { StudentController } from './modules/student/student.controller';
import { PrismaService } from './prisma.service';
import { StudentService } from './modules/student/student.service';
import { TransactionService } from './modules/transaction/transaction.service';
import { TransactionController } from './modules/transaction/transaction.controller';

@Module({
  imports: [],
  controllers: [AppController, SignInController , StudentController, TransactionController],
  providers: [AppService, SignInService, PrismaService, StudentService,TransactionService],
})
export class AppModule {}
