import { EntityRepository, Repository } from 'typeorm';
import { Application } from './applications.entity';

@EntityRepository(Application)
export class ApplicationsRepository extends Repository<Application> {

}