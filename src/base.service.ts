import { IBaseService } from './IBaseService';
import { BadGatewayException } from '@nestjs/common';
import { Repository, BaseEntity } from 'typeorm';

export class BaseService<T extends BaseEntity> implements IBaseService<T>{
  constructor(private readonly genericRepository: Repository<T>) { }
  create(entity: T | any): Promise<any> {
    try {
      return new Promise<T>((resolve, reject) => {
        this.genericRepository.save(entity)
          .then(created => resolve(created))
          .catch(err => reject(err))
      })
    }
    catch (error) {
      throw new BadGatewayException(error);
    }
  }
  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  get(id: number): Promise<T> {
    try {} catch (error) {
      throw new BadGatewayException(error);
    }
    return <Promise<T>>this.genericRepository.findOne(id);
  }
  delete(id: number) {
    try {
      this.genericRepository.delete(id)
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
  update(entity: T | any): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.genericRepository.findOne(entity.id)
          .then((responseGet: T | any) => {
            try {
              if (responseGet == null) reject('Not existing')
              this.genericRepository.update(entity.id, entity)
                .then(response => resolve(response))
                .catch(err => reject(err))
            }
            catch (e) {
              reject(e)
            }
          })
          .catch(err => reject(err))
      })
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}