"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./modules/auth/auth.module");
const configuration_module_1 = require("./configuration/configuration.module");
const category_module_1 = require("./modules/category/category.module");
const database_module_1 = require("./database/database.module");
const product_module_1 = require("./modules/product/product.module");
const repository_module_1 = require("./repository/repository.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const marketplace_profile_module_1 = require("./modules/marketplace-profile/marketplace-profile.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            configuration_module_1.ConfigurationModule,
            repository_module_1.RepositoryModule,
            category_module_1.CategoryModule,
            auth_module_1.AuthModule,
            product_module_1.ProductModule,
            marketplace_profile_module_1.BusinessModule,
            repository_module_1.RepositoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map