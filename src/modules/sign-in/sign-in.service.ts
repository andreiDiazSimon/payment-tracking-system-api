import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service'; 

@Injectable()
export class SignInService {
  constructor(private prisma: PrismaService) {}

  async signIn(username: string, password: string) {
    // Find the student by username
    const student = await this.prisma.student.findUnique({
      where: { username },
    });

    if (!student || student.password !== password) {
      return null; // Invalid username or password
    }

    return student; // Return student object if login is successful
  }
}
