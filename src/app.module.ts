import { Module } from "@nestjs/common";

import { AuthModule } from "auth/auth.module";
import { ConfigurationModule } from "src/configuration/configuration.module";
import { CategoryModule } from "category/category.module";
import { DatabaseModule } from "src/database/database.module";
import { ProductModule } from "product/product.module";
import { RepositoryModule } from "repository/repository.module";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BusinessModule } from "./modules/marketplace-profile/marketplace-profile.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigurationModule,
    RepositoryModule,
    CategoryModule,
    AuthModule,
    ProductModule,
    BusinessModule,
    RepositoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
