import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1736306183719 implements MigrationInterface {
  constructor(
    private readonly usersTable = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          primaryKeyConstraintName: 'users_pk',
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'full_name',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'username',
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
        {
          name: 'nickname',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'kana_name',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'postal_code',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'address',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'phone_number',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'date_of_birth',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'gender',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'email_verified_at',
          type: 'timestamp',
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
    await queryRunner.createTable(this.usersTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users', true);
  }
}
