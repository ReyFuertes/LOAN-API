import { Loan } from './loans.entity';
import { BaseService } from './../base.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoansService extends BaseService<Loan> {

}

