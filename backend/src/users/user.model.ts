import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { Teacher } from 'src/teachers/teacher.model';

@Table({ tableName: 'Users' })
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.ENUM('student', 'teacher'),
    allowNull: false,
  })
  role: 'student' | 'teacher';

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  profilePictureUrl: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday: string;

  @HasOne(() => Teacher)
  teacher: Teacher;
}
