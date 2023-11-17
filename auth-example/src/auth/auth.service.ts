import { Injectable } from '@nestjs/common';
import { User } from '../types/User';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  testUser: User;

  constructor(private jwtService: JwtService) {
    this.testUser = {
      id: 10,
      name: 'juani',
      password: 'test',
    };
  }

  //ACA TRAEMOS AL USUARIO DE MONGO
  validateUser(username: string, password: string): User {
    console.log('AuthService validateUser()');
    if (
      this.testUser.name.toLowerCase() == username.toLowerCase() &&
      this.testUser.password == password
    ) {
      return {
        id: this.testUser.id,
        name: this.testUser.name,
      };
    }
  }

  login(user: User) {
    const payload = {
      name: user.name,
      id: user.id,
    };

    console.log(user, payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
