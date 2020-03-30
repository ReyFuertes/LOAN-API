import { Loan } from './../loans/loans.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Generated, OneToOne, OneToMany } from 'typeorm';

@Entity()
export class Collector extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @OneToMany(() => Loan, loan => loan.collector)
  loan: Loan[]
}