"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ConfigurationService = class ConfigurationService {
    constructor(configService) {
        this.configService = configService;
    }
    get appEnv() {
        return this.configService.get('app.env');
    }
    get appPort() {
        return this.configService.get('app.port');
    }
    get databaseConfig() {
        const dbHost = this.configService.get('database.host');
        const dbPort = this.configService.get('database.port');
        const dbName = this.configService.get('database.name');
        const dbUsername = this.configService.get('database.username');
        const dbPassword = this.configService.get('database.password');
        return {
            host: dbHost,
            port: dbPort,
            name: dbName,
            username: dbUsername,
            password: dbPassword,
        };
    }
    get jwtSecret() {
        return this.configService.get('jwt.secret');
    }
};
exports.ConfigurationService = ConfigurationService;
exports.ConfigurationService = ConfigurationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ConfigurationService);
//# sourceMappingURL=configuration.service.js.map