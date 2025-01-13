import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAdminTable1736388064714 implements MigrationInterface {
  constructor(
    private readonly adminTable = new Table({
      name: 'admins',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          primaryKeyConstraintName: 'admins_pk',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'full_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'email',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'password',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'status',
          type: 'int',
          isNullable: false,
        },
      ],
    }),
  ) {}

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.adminTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('admins', true);
  }
}
