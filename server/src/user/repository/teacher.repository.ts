import { EntityRepository, Repository } from 'typeorm';
import Teacher from '../entity/teacher.entity';

@EntityRepository(Teacher)
export class TeacherRepository extends Repository<Teacher> {
  public getTeachers(): Promise<Teacher[]> {
    return this.createQueryBuilder('teacher').getMany();
  }

  public getTeacherByIdx(idx: number): Promise<Teacher> {
    return this.createQueryBuilder('teacher')
      .where('idx = :idx', { idx })
      .getOne();
  }

  public getTeacherByName(name: string): Promise<Teacher[]> {
    return this.createQueryBuilder('teacher')
      .where('name = :name', { name })
      .getMany();
  }
}
