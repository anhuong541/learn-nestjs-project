import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCarsTable1736306258699 implements MigrationInterface {
  constructor(
    private readonly carsTable = new Table({
      name: 'cars',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          primaryKeyConstraintName: 'cars_pk',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'plate_number',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'capacity',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'point_x',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'point_y',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'message',
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
    }),
  ) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.carsTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars', true);
  }
}
