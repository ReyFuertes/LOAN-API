import { Loan } from './loans.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Loan)
export class LoansRepository extends Repository<Loan> {
 
}