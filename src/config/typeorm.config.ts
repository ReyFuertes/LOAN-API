import { TypeOrmModuleOptions } from '@nestjs/typeorm'
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'p@55w0rd',
  database: 'importleads',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}