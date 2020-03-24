import { Borrower } from './borrowers.entity';
import { Repository, EntityRepository } from 'typeorm';
/**
 * custom query to the database will be performed here unless crud
 */
@EntityRepository(Borrower)
export class BorrowersRepository extends Repository<Borrower> {

}