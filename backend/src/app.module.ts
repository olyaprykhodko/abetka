import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users/user.model';
import { Teacher } from './teachers/teacher.model';
import { Subject } from './subjects/subject.model';
import { Booking } from './bookings/booking.model';
import { Schedule } from './schedules/schedule.model';
import { Review } from './reviews/review.model';
import { Payment } from './payments/payment.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'abetka',
      models: [User, Teacher, Subject, Booking, Schedule, Review, Payment],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      User,
      Teacher,
      Subject,
      Booking,
      Schedule,
      Review,
      Payment,
    ]),
    AuthModule,
  ],
})
export class AppModule {}
