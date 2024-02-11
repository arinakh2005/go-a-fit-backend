import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { User } from '../entities/user.entity';

@CustomRepository(User)
export class UserRepository extends BaseRepository<User> { }