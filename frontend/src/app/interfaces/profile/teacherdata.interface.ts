import { UserData } from './userdata.interface';

export interface TeacherData extends UserData {
  bio: string | null;
  degree: string;
  speciality: string;
  university: string;
  studyYears: string;
  additionalEducation: string;
  mainWorkplace: string;
  mainPosition: string;
  mainWorkingYears: string;
  otherExperience: string;
  experienceYears: number;
}
