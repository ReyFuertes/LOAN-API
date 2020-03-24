import { UpdateBorrowerDto } from './dto/update-borrower-dto';
import { Borrower } from './borrowers.entity';
import { BorrowersRepository } from './borrowers.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';

@Injectable()
export class BorrowersService extends BaseService<Borrower> {
  constructor(@InjectRepository(BorrowersRepository) borrowersRepository: BorrowersRepository) {
    super(borrowersRepository);
  }
  async getAllBorrowers(): Promise<Borrower[]> {
    return this.getAll();
  }
  async getById(id: number): Promise<Borrower> {
    const borrower = await this.get(id);
    if (!borrower) {
      throw new NotFoundException(`Borrower with ID "${id}" not found`);
    }
    return borrower;
  }
  async createBorrower(createBorrowerDto: CreateBorrowerDto): Promise<Borrower> {
    return this.create(createBorrowerDto);
  }
  async updateBorrower(updateBorrowerDto: UpdateBorrowerDto): Promise<Borrower> {
    return this.update(updateBorrowerDto);
  }
  async deleteById(id: number): Promise<void> {
    await this.delete(id);
  }
}
