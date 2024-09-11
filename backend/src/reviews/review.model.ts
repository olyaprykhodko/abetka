import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Teacher } from '../teachers/teacher.model';

@Table
export class Review extends Model<Review> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  studentId: number;

  @ForeignKey(() => Teacher)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  teacherId: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rating: number;
}
