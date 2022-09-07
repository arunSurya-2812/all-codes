export type initialInput = {
  id: number;
  name: string;
  type: string;
  text: string;
  value: string | undefined | any;
};

export interface IStaffInputs {
  name: string | undefined;
  email: string | undefined;
  mobile: string | undefined;
  dob: string | undefined;
}

export interface IStudentInputs {
  name: string | undefined;
  email: string | undefined;
  mobile: string | undefined;
  dob: string | undefined;
  bloodgroup: string | undefined;
  fathername: string | undefined;
  mothername: string | undefined;
  address: string | undefined;
  studentphoto: File | undefined;
  coursename:undefined | string;
  staff: undefined | string ;
} 
export interface ICourseInputs {
  coursename: string | undefined;
  staffName: string | undefined;
}
