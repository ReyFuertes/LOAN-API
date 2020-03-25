import { GetBorrowerFilterDto } from './dto/get-borrower-dto';
import { Borrower } from './borrowers.entity';
import { BorrowersService } from './borrowers.service';
import { Controller, Get, Post, Body, Param, ParseIntPipe, Delete, Patch, Query } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower-dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private borrowersService: BorrowersService) { }
  @Get()
  getAll(@Query() getBorrowerFilterDto: GetBorrowerFilterDto): Promise<Borrower[]> {
    return this.borrowersService.getAllBorrowers(getBorrowerFilterDto);
  }
  @Post()
  create(@Body() createBorrowerDto: CreateBorrowerDto): Promise<Borrower> {
    return this.borrowersService.createBorrower(createBorrowerDto);
  }
  @Get('/:id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<Borrower> {
    return this.borrowersService.getById(id);
  }
  @Patch()
  update(@Body() borrower: Borrower): Promise<Borrower> {
    return this.borrowersService.updateBorrower(borrower);
  }
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.borrowersService.deleteById(id);
  }
}
