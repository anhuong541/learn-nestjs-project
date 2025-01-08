import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './modules/bookings/bookings.module';
import { UsersModule } from './modules/users/users.module';
import { CarsModule } from './modules/cars/cars.module';
import { StationsModule } from './modules/stations/stations.module';
import { TypeOrmModuleforRoot } from './configs/database-configs';

@Module({
  imports: [
    TypeOrmModuleforRoot,
    UsersModule,
    CarsModule,
    StationsModule,
    BookingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
