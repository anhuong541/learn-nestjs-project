import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

export const TypeOrmModuleforRoot = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [
    path.join(__dirname, '..', 'database', 'migrations', '*{.ts,.js}'),
  ],
  synchronize: false,
  autoLoadEntities: true,
});
