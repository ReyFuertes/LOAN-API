import { Borrower } from './entities/borrowers.entity';
import { GetBorrowerDto } from './dto/get-borrower-dto';
import { UpdateBorrowerDto } from './dto/update-borrower-dto';
import { BorrowersRepository } from './borrowers.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower-dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';

@Injectable()
export class BorrowersService extends BaseService<Borrower> {
  constructor(@InjectRepository(BorrowersRepository) public borrowersRepository: BorrowersRepository) {
    super(borrowersRepository);
  }
  async getAllBorrowers(gbDto: GetBorrowerDto): Promise<Borrower[]> {
    return this.borrowersRepository.getAll(gbDto)
  }
  async getById(id: number): Promise<Borrower> {
    const borrower = await this.get(id);
    if (!borrower) {
      throw new NotFoundException(`Borrower with ID "${id}" not found`);
    }
    return borrower;
  }
  async createBorrower(cbDto: CreateBorrowerDto): Promise<Borrower> {
    return this.create(cbDto);
  }
  async updateBorrower(ubDto: UpdateBorrowerDto): Promise<Borrower> {
    return this.update(ubDto);
  }
  async deleteById(id: number): Promise<void> {
    await this.delete(id);
  }
}
