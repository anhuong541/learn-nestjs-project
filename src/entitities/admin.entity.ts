import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn({
    name: 'id',
    primaryKeyConstraintName: 'admins_pk',
  })
  id: number;

  @Column({
    name: 'full_name',
    type: 'varchar',
    nullable: false,
  })
  fullName: string;

  @Column({
    name: 'email',
    type: 'varchar',
    nullable: false,
  })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    name: 'status',
    type: 'int',
    nullable: false,
  })
  status: number;
}
