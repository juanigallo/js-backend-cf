import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from 'src/types/User';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '$P4L4bR45Up3RS3CR3T4%',
    });
  }

  validate(payload: User) {
    console.log('Validate en jwtStrategy', payload.id);
    return { id: payload.id, username: payload.name };
  }
}
