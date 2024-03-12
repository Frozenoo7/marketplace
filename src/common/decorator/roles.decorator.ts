import { SetMetadata } from '@nestjs/common';
import { BusinessRole } from 'common/enums';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: BusinessRole[]) =>
  SetMetadata(ROLES_KEY, roles);
