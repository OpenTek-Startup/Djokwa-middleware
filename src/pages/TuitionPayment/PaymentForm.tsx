import './form.css';
import { ChangeEvent, useState } from 'react';
// import { IconRepository } from '../repository/icons/icon.repository';
import { Button } from '../../components/ui/button';
import TextInput from '../../components/molecules/input-components/text-input/text-input.component';
import Dropdown from '../../components/molecules/dropdown-component/Dropdown.component';
import {
  academicYearOptions,
  installmentOptions,
  payentMethodsOptions,
  studentClassOptions,
} from '../../constants/demoData';
import Textarea from '../../components/molecules/text-area/Text-area.molecule';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { string } from 'prop-types';

// Form validation
const PaymentTuitionSchema = z.object({
  academicYear: z
    .number({ message: 'Please select an academic year' })
    .min(2000, 'The year should be greather than 2000')
    .max(3000, 'The year should be less than 3000'),
  installment: z
    .string({ message: 'Select an installment' })
    .min(3, 'Please select an installment'),
  studentName: z
    .string({ message: 'The name should be a string' })
    .min(3, { message: 'Student name must be at least 3 characters' })
    .max(32, { message: 'Student name cannot exceed 32 characters' }),
  paymentMethod: z
    .string({ message: 'Please select payment method' })
    .min(2, 'Please select a payment method'),
  matricule: z
    .string({ message: 'Please enter your matricule' })
    .regex(/^FE\d{2}A\d{3}$/, 'Matricule must match the format FExxAxxx'),
  studentClass: z
    .string({ message: 'Please Select a Class' })
    .min(2, 'Please select a student class'),
  additionalNotes: z
    .string()
    .max(250, 'Additional notes cannot exceed 250 characters'),
});
type FormFields = z.infer<typeof PaymentTuitionSchema>;

const PaymentForm = () => {
  // State variables
  const [academicYear, setAcademicYear] = useState('');
  const [installment, setInstallment] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [matricule, setMatricule] = useState('');
  const [studentName, setStudentName] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');

  // state for errors
  /*
  const [errors, setErrors] = useState({
    academicYear: '',
    installment: '',
    studentClass: '',
    paymentMethod: '',
    matricule: '',
    studentName: '',
    additionalNotes: '',
  });*/

  const handleInstallmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInstallment(e.target.value);
  };

  const handleStudentClassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentClass(e.target.value);
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleMatriculeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMatricule(e.target.value);
  };

  const handleStudentNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
    console.log('Student Name:', e.target.value);
    alert('name changed');
  };

  const handleAdditionalNotesChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAdditionalNotes(e.target.value);
  };
  const handleAcademicYear = (e: ChangeEvent<HTMLInputElement>) => {
    setAcademicYear(e.target.value);
  };

  const onSubmit = (data: FormFields) => {
    console.log(data);
    alert('submitted');
    // Handle form submission
    // try {
    //   const formData = {
    //     academicYear,
    //     installment,
    //     studentName,
    //     paymentMethod,
    //     matricule,
    //     studentClass,
    //     additionalNotes,
    //   };

    //   const validatedFormData = PaymentTuitionSchema.parse(formData);

    //   // Form data is valid, proceed with submission
    //   const newStudent = {
    //     academicYear: validatedFormData.academicYear,
    //     name: validatedFormData.studentName,
    //     matricule: validatedFormData.matricule,
    //     class: validatedFormData.studentClass,
    //     installment: validatedFormData.installment,
    //     method: validatedFormData.paymentMethod,
    //     notes: validatedFormData.additionalNotes,
    //   };

    //   // Submit the new student data to the database
    //   console.log('New student:', newStudent);
    // } catch (error) {
    //   if (error instanceof z.ZodError) {
    //     // Handle validation errors
    //     console.error('Validation errors:', error.issues);
    //     // Display the validation errors to the user
    //     alert(`Validation error: ${error.issues[0].message}`);
    //   } else {
    //     // Handle other errors
    //     console.error('Error:', error);
    //   }
    // }

    // const newStudent = {
    //   academicYear: academicYear,
    //   name: studentName,
    //   matricule: matricule,
    //   class: studentClass,
    //   installment: installment,
    //   method: paymentMethod,
    //   notes: additionalNotes,
    // };
    // // submit the new student data to the database
    // console.log('New Student: ', newStudent);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(PaymentTuitionSchema),
    mode: 'onBlur',
  });
  return (
    <div className="max-w-7xl mx-auto">
      <div className="tuitionTitle">On-site Tuition Payment</div>
      <form
        action="./dashboard"
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="container-form"
      >
        <div className="container">
          <div className="form-group">
            {/* DropdownIcon={<i className="fas fa-angle-down"></i>} */}
            <Controller
              name="academicYear"
              control={control}
              render={() => (
                <Dropdown
                  title="Accademic Year"
                  options={academicYearOptions}
                  onchange={() => handleAcademicYear}
                  selectedValue={academicYear}
                />
              )}
            />
            {errors.academicYear && (
              <p className="text-red-500">{errors.academicYear.message}</p>
            )}
          </div>
          <div className="form-group">
            <Controller
              name="studentName"
              control={control}
              render={() => (
                <TextInput
                  label="Student Name"
                  type="text"
                  placeholder="Enter the student Name"
                  name={studentName}
                  value={studentName}
                  onChange={handleStudentNameChange}
                  width="90%"
                  height={71.86}
                />
              )}
            />
            {errors.studentName && (
              <p className="text-red-500">{errors.studentName.message}</p>
            )}
          </div>
          <div className="form-group">
            <Controller
              name="matricule"
              control={control}
              render={() => (
                <TextInput
                  label="Matricule"
                  type="text"
                  placeholder="Enter the Matricule"
                  name={matricule}
                  onChange={handleMatriculeChange}
                  width="90%"
                  height={71.86}
                />
              )}
            />
            {errors.matricule && (
              <p className="text-red-500">{errors.matricule.message}</p>
            )}
          </div>
          <div className="form-group">
            <Controller
              name="studentClass"
              control={control}
              render={() => (
                <Dropdown
                  title="Student Class"
                  options={studentClassOptions}
                  onchange={() => handleStudentClassChange}
                  selectedValue={studentClass}
                  // DropdownIcon={IconRepository.AccountDoorIcon}
                />
              )}
            />
            {errors.studentClass && (
              <p className="text-red-500">{errors.studentClass.message}</p>
            )}
          </div>
          <div className="form-group">
            <Controller
              name="installment"
              control={control}
              render={() => (
                <Dropdown
                  title="Installment"
                  options={installmentOptions}
                  onchange={() => handleInstallmentChange}
                  selectedValue={installment}
                />
              )}
            />
            {errors.installment && (
              <p className="text-red-500">{errors.installment.message}</p>
            )}
          </div>
          {/* sixth element */}
          <div className="form-group">
            <Controller
              name="paymentMethod"
              control={control}
              render={() => (
                <Dropdown
                  title="Payment method"
                  options={payentMethodsOptions}
                  onchange={() => handlePaymentMethodChange}
                  selectedValue={paymentMethod}
                />
              )}
            />
            {errors.paymentMethod && (
              <p className="text-red-500">{errors.paymentMethod.message}</p>
            )}
          </div>
          {/* Seventh element */}
          <div className="form-group grid-item">
            <Controller
              name="additionalNotes"
              control={control}
              render={() => (
                <Textarea
                  handleChange={() => handleAdditionalNotesChange}
                  label={'Additional Notes'}
                  placeholder={'You can write additionnal notes here ...'}
                  name={additionalNotes}
                />
              )}
            />
            {errors.additionalNotes && (
              <p className="text-red-500">{errors.additionalNotes.message}</p>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="w-[min(10rem,calc(100%-2rem))] my-10 mx-auto py-6 bg-[#142e6e] flex items-center gap-x-3"
        >
          Done
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
