import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBookingTable1736306249954 implements MigrationInterface {
  constructor(
    private readonly bookingsTable = new Table({
      name: 'bookings',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          primaryKeyConstraintName: 'bookings_pk',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'user_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'car_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'start_station_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'end_station_id',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'password',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'issue_report',
          type: 'text',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
          isNullable: false,
        },
      ],
      foreignKeys: [
        {
          columnNames: ['user_id'],
          referencedTableName: 'users',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        },
        {
          columnNames: ['car_id'],
          referencedTableName: 'cars',
          referencedColumnNames: ['id'],
          onDelete: 'CASCADE',
        },
      ],
    }),
  ) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.bookingsTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('bookings', true);
  }
}
