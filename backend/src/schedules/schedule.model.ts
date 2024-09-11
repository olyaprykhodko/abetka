import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Teacher } from '../teachers/teacher.model';

@Table
export class Schedule extends Model<Schedule> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Teacher)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  teacherId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  availableDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  timeSlot: string;
}
