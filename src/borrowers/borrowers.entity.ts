
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Borrower extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  middlename: string;
  @Column()
  age: number;
  @Column()
  gender: string;
  @Column()
  contact_number: string;
  @Column()
  address: string;
  @Column()
  spouse_name: string;
  @Column()
  spouse_contact_number: string;
  @Column()
  spouse_address: string
}