import { Borrower } from './../borrowers/entities/borrowers.entity';
import { CoMaker } from './../entities/comaker.entity';
import { ApplicationStatus, PaymentTerm } from './../models/generic.model';

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
  @Column({ nullable: true})
  loan_amount: string;
  @Column({ nullable: true})
  paymentTerm: PaymentTerm;
  @Column({ nullable: true})
  status: ApplicationStatus;

  @OneToOne(() => CoMaker, comaker => comaker.application)
  comaker: CoMaker;
  @ManyToOne(() => Borrower, borrower => borrower.applications)
  public borrower: Borrower;
}