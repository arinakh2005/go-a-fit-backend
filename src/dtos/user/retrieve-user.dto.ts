import { SystemRole } from '../../enums/system-role.enum';
import { Notification } from '../../entities/notification.entity';
import { FitOrder } from '../../entities/fit-order.entity';
import { Athlete } from '../../entities/athlete.entity';
import { Coach } from '../../entities/coach.entity';

export class RetrieveUserDto {
  public name: string;
  public surname: string;
  public patronymic: string;
  public dateOfBirth: Date;
  public email: string;
  public username: string;
  public imageUrl?: string;
  public systemRole: SystemRole;
  public fitCentAmount: number;
  public notifications: Notification[];
  public fitOrders: FitOrder[];
  public athlete: Athlete;
  public coach: Coach;
}