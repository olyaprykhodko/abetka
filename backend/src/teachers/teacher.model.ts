import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

@Table
export class Teacher extends Model<Teacher> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

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
    type: DataType.TEXT,
    allowNull: true,
  })
  bio: string;

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

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  degree: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  speciality: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  university: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  studyYears: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  additionalEducation: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mainWorkplace: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  mainPosition: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  mainWorkingYears: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  otherExperience: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  experienceYears: number;
}
