import { EntityRepository, Repository } from 'typeorm';
import Online from '../entity/online.entity';

@EntityRepository(Online)
export class OnlineRepository extends Repository<Online> {}
