import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignInController } from './modules/sign-in/sign-in.controller';
import { SignInService } from './modules/sign-in/sign-in.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, SignInController],
  providers: [AppService, SignInService, PrismaService],
})
export class AppModule {}
