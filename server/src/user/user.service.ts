import { Injectable } from '@nestjs/common';
import TeacherInfoDto from './dto/teacherInfo.dto';
import Teacher from './entity/teacher.entity';
import { TeacherRepository } from './repository/teacher.repository';

@Injectable()
export class UserService {
  constructor(private readonly teacherRepository: TeacherRepository) {}

  async getTeacher(): Promise<Teacher[]> {
    const teacher: Teacher[] = await this.teacherRepository.getTeachers();
    return teacher;
  }

  async getTeacherByIdx(idx: number): Promise<Teacher> {
    const teacher: Teacher = await this.teacherRepository.getTeacherByIdx(idx);
    return teacher;
  }

  async getTeacherByName(name: string): Promise<Teacher[]> {
    const teacher: Teacher[] = await this.teacherRepository.getTeacherByName(
      name,
    );
    return teacher;
  }

  async addTeahcer(teacherInfoDto: TeacherInfoDto): Promise<void> {
    await this.teacherRepository.save(teacherInfoDto);
  }

  async modifyTeahcer(idx: number, teacherInfo: TeacherInfoDto): Promise<void> {
    const checkTeacher: Teacher = await this.teacherRepository.getTeacherByIdx(
      idx,
    );
    await this.teacherRepository.merge(checkTeacher, teacherInfo);
  }

  async deleteTeacher(idx: number): Promise<void> {
    await this.teacherRepository.delete(idx);
  }
}
