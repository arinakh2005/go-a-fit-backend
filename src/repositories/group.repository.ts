import { CustomRepository } from '../typeorm-ex/typeorm-ex.decorator';
import { BaseRepository } from './base.repository';
import { Group } from '../entities/group.entity';

@CustomRepository(Group)
export class GroupRepository extends BaseRepository<Group> {
}
