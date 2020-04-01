import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base.service';
import { Application } from './applications.entity';

@Injectable()
export class ApplicationsService extends BaseService<Application> {
}