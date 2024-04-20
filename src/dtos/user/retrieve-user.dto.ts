import { SystemRole } from '../../enums/system-role.enum';
import { Notification } from '../../entities/notification.entity';
import { FitOrder } from '../../entities/fit-order.entity';
import { Athlete } from '../../entities/athlete.entity';
import { Coach } from '../../entities/coach.entity';

export class RetrieveUserDto {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  dateOfBirth: Date;
  email: string;
  phone: string;
  username: string;
  imageUrl?: string;
  systemRole: SystemRole;
  fitCentAmount: number;
  notifications: Notification[];
  fitOrders: FitOrder[];
  athlete: Athlete;
  coach: Coach;
}