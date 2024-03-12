import { ConfigService } from '@nestjs/config';
import { Database } from './interface/env.interface';
export declare class ConfigurationService {
    private readonly configService;
    constructor(configService: ConfigService);
    get appEnv(): string;
    get appPort(): number;
    get databaseConfig(): Database;
    get jwtSecret(): string;
}
