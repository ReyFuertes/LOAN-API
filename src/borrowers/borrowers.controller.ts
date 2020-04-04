import { GetBorrowerDto } from './dto/get-borrower-dto';
import { Borrower } from './borrowers.entity';
import { BorrowersService } from './borrowers.service';
import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower-dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private borrowerSrv: BorrowersService) { }
  @Get()
  getAll(@Query() getBorrowerFilterDto: GetBorrowerDto): Promise<Borrower[]> {
    return this.borrowerSrv.getAllBorrowers(getBorrowerFilterDto);
  }
  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerDto): Promise<Borrower> {
    return this.borrowerSrv.createBorrower(createBorrowerDto);
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<Borrower> {
    return this.borrowerSrv.getById(id);
  }
  @Patch()
  update(@Body() borrower: Borrower): Promise<Borrower> {
    return this.borrowerSrv.updateBorrower(borrower);
  }
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.borrowerSrv.deleteById(id);
  }
}
