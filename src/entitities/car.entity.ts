import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('cars')
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'plate_number' })
  plateNumber: string;

  @Column()
  capacity: number;

  @Column()
  status: number;

  @Column({ name: 'point_x', type: 'float' })
  pointX: number;

  @Column({ name: 'point_y', type: 'float' })
  pointY: number;

  @Column({ nullable: true })
  message: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
