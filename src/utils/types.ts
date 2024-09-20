import { z } from 'zod';

const loginSchema = z.object({
  password: z
    .string({
      required_error: 'password is required ',
    })
    .min(8, 'Password must be at least 8 characters long'),

  email: z
    .string({ required_error: 'please enter your email address' })
    .email({ message: 'please enter a valid email address' }),
});

export type iLoginUser = z.infer<typeof loginSchema> & {
  from?: string;
};

export const registerSchema = z
  .object({
    password: z
      .string({
        required_error: 'password is required ',
      })
      .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string(),
    email: z
      .string({ required_error: 'please enter your email address' })
      .email({ message: 'please enter a valid email address' }),
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z
      .number({
        invalid_type_error: 'please enter a number here',
        required_error: 'please this field is required',
      })
      .min(9, 'number should be greater than 8')
      .max(15, 'number should be less than 15'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'], // path of error
  });
export type iRegisterUser = z.infer<typeof registerSchema> & {
  from?: string;
};
export interface iUser {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  role:
    | 'student'
    | 'teacher'
    | 'admin'
    | 'parent'
    | 'accountant'
    | 'principal'
    | 'driver';
  _id: string;
  createdAt?: string;
}
export interface iStudent extends iUser {
  role: 'student';
  dateOfBirth: string;
  address: string;
  parentId: string;
  enrollmentId: string;
  disciplineId: string;
  performanceId: string;
  DOB: string;
}
