import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('teacher')
export default class Teacher {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx: number;

  @Column({
    name: 'name',
  })
  name: string;

  @Column({
    name: 'produce',
  })
  produce: string;

  @Column({
    name: 'subject',
  })
  subject: string;
}
