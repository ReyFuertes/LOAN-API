import { Borrower } from './../borrowers/entities/borrowers.entity';
import { PaymentTerm } from './../models/generic.model';
import { Collector } from './../entities/collector.entity';
import { BaseEntity, PrimaryGeneratedColumn, Generated, Column, ManyToOne, ManyToMany, Entity } from 'typeorm';

@Entity()
export class Loan extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
  @Column({ nullable: true })
  loan_number: string;
  @Column({ nullable: true })
  loan_date: Date;
  @Column({ nullable: true })
  area: Date;
  @Column({ nullable: true})
  paymentTerm: PaymentTerm;
  @Column({ nullable: true})
  principal_amount: string;
  @Column({ nullable: true})
  capital_outstanding: string;
  @Column({ nullable: true})
  outstanding_balance: string;
  @Column({ nullable: true})
  accrued_interest: string;
  @Column({ nullable: true})
  loan_status: LoanStatus;

  @ManyToOne(() => Collector, collector => collector.loan)
  collector: Collector;
  @ManyToOne(() => Borrower, borrower => borrower.loans)
  borrower: Borrower;
}

export enum LoanStatus {
  active = 'Active',
  inactive = 'InActive'
}