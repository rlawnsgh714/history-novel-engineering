import { IsNotEmpty, IsString } from 'class-validator';

export default class TeacherInfoDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  produce!: string;

  @IsNotEmpty()
  @IsString()
  subject!: string;
}
