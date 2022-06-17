import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('online')
export default class Online {
  @PrimaryGeneratedColumn({
    name: 'idx',
  })
  idx: number;

  @Column({
    name: 'title',
  })
  title: string;

  @Column({
    name: 'content',
  })
  content: string;

  @Column({
    name: 'teacher',
  })
  teacher: string;

  @Column({
    name: 'subject',
  })
  subject: string;
}
