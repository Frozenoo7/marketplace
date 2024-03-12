import { BusinessRole } from 'common/enums';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: BusinessRole[]) => import("@nestjs/common").CustomDecorator<string>;
