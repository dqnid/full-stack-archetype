import { SetMetadata, applyDecorators } from '@nestjs/common';
import { Role } from 'src/users/roles/role.enum';

export const ROLES_METADATA = 'roles';

export function Auth(...roles: Role[]) {
  return applyDecorators(SetMetadata(ROLES_METADATA, roles));
}
