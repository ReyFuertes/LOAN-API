import { UpdateBorrowerReferenceDto } from './dto/update-borrower-reference.dto';
import { CreateBorrowerReferenceDto } from './dto/create-borrower-reference.dto';
import { GetBorrowerRefenceDto } from './dto/get-borrower-reference-dto';
import { BorrowerReferencesRepository } from './borrower-references.repository';
import { BorrowerReference } from './borrower-references.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';

@Injectable()
export class BorrowerRefencesService extends BaseService<BorrowerReference> {
  constructor(@InjectRepository(BorrowerReferencesRepository) public borrowersRepository: BorrowerReferencesRepository) {
    super(borrowersRepository);
  }
  async getAllBorrowerReferences(gbrDto: GetBorrowerRefenceDto): Promise<BorrowerReference[]> {
    return this.borrowersRepository.getAll(gbrDto)
  }
  async getById(id: number): Promise<BorrowerReference> {
    const borrower = await this.get(id);
    if (!borrower) {
      throw new NotFoundException(`Borrower with ID "${id}" not found`);
    }
    return borrower;
  }
  async createBorrowerReference(cbrDto: CreateBorrowerReferenceDto): Promise<BorrowerReference> {
    return this.create(cbrDto);
  }
  async updateBorrowerReference(ubrDto: UpdateBorrowerReferenceDto): Promise<BorrowerReference> {
    return this.update(ubrDto);
  }
  async deleteById(id: number): Promise<void> {
    await this.delete(id);
  }
}
