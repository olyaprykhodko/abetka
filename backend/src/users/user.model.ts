import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
} from 'sequelize-typescript';

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
    allowNull: true,
  })
  name: string;

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
    type: DataType.ENUM('student', 'teacher', 'admin'),
    allowNull: false,
  })
  role: 'student' | 'teacher' | 'admin';

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  profilePictureUrl: string;
}
