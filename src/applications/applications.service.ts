import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/base.service';
import { Application } from './applications.entity';

@Injectable()
export class ApplicationsService extends BaseService<Application> {
}