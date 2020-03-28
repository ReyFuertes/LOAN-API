import { Borrower } from './../borrowers/borrowers.entity';

import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @ManyToOne(type => Borrower, borrower => borrower.applications)
  public borrower: Borrower;
}