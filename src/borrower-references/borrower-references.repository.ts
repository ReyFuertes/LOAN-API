import { BorrowerReference } from './borrower-references.entity';
import { sqlOp } from './../models/generic.model';
import { Repository, EntityRepository } from 'typeorm';
import _ = require("lodash");
import { GetBorrowerRefenceDto } from './dto/get-borrower-reference-dto';

@EntityRepository(BorrowerReference)
export class BorrowerReferencesRepository extends Repository<BorrowerReference> {
  async getAll(getBorrowerReferenceDto: GetBorrowerRefenceDto): Promise<BorrowerReference[]> {
    const query = this.createQueryBuilder('borrower');
    _.mapValues(getBorrowerReferenceDto, _.method('toLowerCase')); // convert values to lowercases
    
    const where = getBorrowerReferenceDto;
    const page = Object.assign({}, {
      take: getBorrowerReferenceDto.take,
      skip: getBorrowerReferenceDto.skip
    });
    delete where.skip, where.take;

    if (where && Object.keys(where)) {
      Object.entries(where).forEach(c => {
        //transform entries into object
        const obj = Object.assign({}, Object.entries(c)
          .reduce((acc, [k, v]) => ({ ...acc, [c[0]]: v }), {})
        );
        //note: im just using orWhere so every criteria will match the database
        let op: sqlOp = sqlOp.iLike;
        if (+(Object.values(obj)[0])) op = sqlOp.eq;

        query.orWhere(`${Object.keys(obj)} ${op} :${Object.keys(obj)}`, obj)
      });
    }
    
    const borrowers = await query
      .skip(page.skip).take(page.take) // pagination
      .orderBy('borrower_reference.id', 'DESC') // make sure new records on top
      .getMany();
    return borrowers;
  }
}