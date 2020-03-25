import { GetBorrowerFilterDto } from './dto/get-borrower-dto';
import { Borrower } from './borrowers.entity';
import { Repository, EntityRepository } from 'typeorm';
/**
 * custom query to the database will be performed here unless crud
 */
@EntityRepository(Borrower)
export class BorrowersRepository extends Repository<Borrower> {
  async getFilterBorrowers(getBorrowerFilterDto: GetBorrowerFilterDto): Promise<Borrower[]> {
    const query = this.createQueryBuilder('borrower');
    console.log(getBorrowerFilterDto);
    if (getBorrowerFilterDto && Object.keys(getBorrowerFilterDto)) {
      query.where(getBorrowerFilterDto);
    }
    const borrowers = await query.getMany();
    return borrowers;
  }
}