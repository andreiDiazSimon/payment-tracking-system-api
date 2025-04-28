import { Controller, Post, Body } from '@nestjs/common';
import { SignInService } from './sign-in.service';

@Controller('api/sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  async signIn(@Body() body: { username: string; password: string }) {
	  console.log(body.username, body.password)
    if ((body.username === 'admin', body.password === 'admin')) {
      return {
	      role: "admin",
        message: 'admin Sign-in successful',
      };
    }
    const { username, password } = body;
    const student = await this.signInService.signIn(username, password);

    if (!student) {
      return { message: 'Invalid username or password' };
    }

    return {
      message: 'Sign-in successful',
      role: 'student',
      student: {
        id: student.id,
        username: student.username,
      },
    };
  }
}
