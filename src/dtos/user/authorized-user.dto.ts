import { RetrieveUserDto } from './retrieve-user.dto';

export class AuthorizedUserDto {
  user: RetrieveUserDto;
  authToken: string;
}