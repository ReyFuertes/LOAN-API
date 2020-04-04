import { BorrowerReference } from './../borrower-references/borrower-references.entity';
import { Loan } from './../loans/loans.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany, OneToOne } from 'typeorm';
import { Application } from 'src/applications/applications.entity';

@Entity()
export class Borrower extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column({ nullable: true})
  middlename: string;
  @Column({ nullable: true})
  age: number;
  @Column({ nullable: true})
  gender: string;
  @Column({ nullable: true})
  contact_number: string;
  @Column({ nullable: true})
  address: string;
  @Column({ nullable: true})
  spouse_name: string;
  @Column({ nullable: true})
  spouse_contact_number: string;

  @OneToMany(() => BorrowerReference, br => br.borrower)
  borrower_references: BorrowerReference[];

  @OneToMany(() => Loan, loan => loan.borrower)
  loans: Loan[];
  @OneToMany(() => Application, applications => applications.borrower)
  applications: Application[]
}