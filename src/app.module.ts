import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { StationsModule } from './stations/stations.module';
import { BookingModule } from './booking/booking.module';
import { BookingsModule } from './bookings/bookings.module';
import { BookingsModule } from './modules/bookings/bookings.module';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import { StationsModule } from './modules/stations/stations.module';

@Module({
  imports: [
    UsersModule,
    CarsModule,
    StationsModule,
    BookingModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
