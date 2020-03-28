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
    const where = getBorrowerFilterDto;
    const page = Object.assign({}, {
      take: getBorrowerFilterDto.take,
      skip: getBorrowerFilterDto.skip
    });
    delete where.skip, where.take;

    if (where && Object.keys(where)) {
      Object.entries(where).forEach(c => {
        //transform entries into object
        const obj = Object.assign({}, Object.entries(c)
          .reduce((acc, [k, v]) => ({ ...acc, [c[0]]: v }), {})
        );
        //note: im just using orWhere so every criteria will match the database
        query.orWhere(`${Object.keys(obj)} ilike :${Object.keys(obj)}`, obj)
      });
    }
    const borrowers = await query
      .skip(page.skip).take(page.take) // pagination
      .printSql() //debug sql
      .getRawMany();
    return borrowers;
  }
}