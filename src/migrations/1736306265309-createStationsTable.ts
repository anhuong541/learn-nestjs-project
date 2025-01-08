import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateStationsTable1736306265309 implements MigrationInterface {
  constructor(
    private readonly stationsTable = new Table({
      name: 'stations',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          primaryKeyConstraintName: 'stations_pk',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'latitude',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'longitude',
          type: 'float',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'int',
          isNullable: false,
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
    await queryRunner.createTable(this.stationsTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('stations', true);
  }
}
