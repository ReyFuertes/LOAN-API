import { GetBorrowerFilterDto } from './dto/get-borrower-dto';
import { Borrower } from './borrowers.entity';
import { Repository, EntityRepository } from 'typeorm';
import _ = require("lodash");
/**
 * custom query to the database will be performed here unless crud
 */
@EntityRepository(Borrower)
export class BorrowersRepository extends Repository<Borrower> {
  async getFilterBorrowers(getBorrowerFilterDto: GetBorrowerFilterDto): Promise<Borrower[]> {
    const query = this.createQueryBuilder('borrower');
    _.mapValues(getBorrowerFilterDto, _.method('toLowerCase')); // convert values to lowercases
    const page = Object.assign({}, {
      take: getBorrowerFilterDto.take,
      skip: getBorrowerFilterDto.skip
    });
    if (getBorrowerFilterDto && Object.keys(getBorrowerFilterDto)) {
      query.where(getBorrowerFilterDto); // criteria
    }
    const borrowers = await query
      .skip(page.skip).take(page.take) // pagination
      .getRawMany();
    return borrowers;
  }
}