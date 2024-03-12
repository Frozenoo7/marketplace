import { Strategy } from 'passport-jwt';
import { ConfigurationService } from 'src/configuration/configuration.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    constructor(configService: ConfigurationService);
    validate(payload: any): Promise<{
        userId: any;
        businessId: any;
    }>;
}
export {};
