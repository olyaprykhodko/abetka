import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { User } from './users/user.model';
import { Teacher } from './teachers/teacher.model';
import { Subject } from './subjects/subject.model';
import { Booking } from './bookings/booking.model';
import { Schedule } from './schedules/schedule.model';
import { Review } from './reviews/review.model';
import { Payment } from './payments/payment.model';
import { JwtModule } from './auth/jwt/jwt.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'abetka',
      models: [User, Teacher, Subject, Booking, Schedule, Review, Payment],
      autoLoadModels: true,
      synchronize: true,
      logging: console.log,
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
    JwtModule,
    HealthcheckModule,
  ],
})
export class AppModule {}
