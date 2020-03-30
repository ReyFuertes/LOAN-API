import { BaseEntity, Entity, PrimaryGeneratedColumn, Generated, Column, OneToOne } from 'typeorm';
import { Application } from 'src/applications/applications.entity';
import { application } from 'express';
@Entity()
export class CoMaker extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Generated('uuid')
  id: string;
  @Column({nullable: true})
  name: string;

  @OneToOne(() => Application, application => application.comaker)
  application: Application;
}