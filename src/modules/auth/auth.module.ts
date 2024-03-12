import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ConfigurationService } from 'src/configuration/configuration.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    // JwtModule.registerAsync({
    //   inject: [ConfigurationService],
    //   useFactory: async (configService: ConfigurationService) => ({
    //     secret: configService.jwtSecret,
    //     signOptions: { expiresIn: '30d' },
    //   }),
    // }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}
