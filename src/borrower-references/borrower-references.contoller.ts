import { GetBorrowerRefenceDto } from './dto/get-borrower-reference-dto';
import { BorrowerRefencesService } from './borrower-references.service';
import { BorrowerReference } from './borrower-references.entity';
import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query } from '@nestjs/common';
import { CreateBorrowerReferenceDto } from './dto/create-borrower-reference.dto';

@Controller('borrower-references')
export class BorrowerReferencesController {
  constructor(private borrowerReferencesService: BorrowerRefencesService ) { }
  @Get()
  getAll(@Query() gbrDto: GetBorrowerRefenceDto): Promise<BorrowerReference[]> {
    return this.borrowerReferencesService.getAllBorrowerReferences(gbrDto);
  }
  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerReferenceDto): Promise<BorrowerReference> {
    return this.borrowerReferencesService.createBorrowerReference(createBorrowerDto);
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<BorrowerReference> {
    return this.borrowerReferencesService.getById(id);
  }
  @Patch()
  update(@Body() borrowerReference: BorrowerReference): Promise<BorrowerReference> {
    return this.borrowerReferencesService.updateBorrowerReference(borrowerReference);
  }
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.borrowerReferencesService.deleteById(id);
  }
}
