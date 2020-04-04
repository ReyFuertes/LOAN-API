import { Borrower } from './../borrowers/borrowers.entity';
import { Gender } from './../generic.models';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class BorrowerReference extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;

  @Column({nullable: true})
  firstname: string;
  @Column({nullable: true})
  lastname: string;
  @Column({nullable: true})
  age: number;
  @Column({nullable: true})
  gender: Gender;
  @Column({nullable: true})
  contact_number: string;
  @Column({nullable: true})
  address: string;

  @ManyToOne(() => Borrower)
  borrower: Borrower;
}