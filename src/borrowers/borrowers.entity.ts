
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Generated } from 'typeorm';

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
  @Column({ nullable: true})
  spouse_address: string
}