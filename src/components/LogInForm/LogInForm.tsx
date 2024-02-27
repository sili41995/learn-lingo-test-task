import { ICredentials } from '@/types/types';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuEyeOff } from 'react-icons/lu';
import { Form, InputWrap } from './LogInForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';

const LogInForm: FC = () => {
  const {
    // register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ICredentials>();

  const handleFormSubmit: SubmitHandler<ICredentials> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <p>Log In</p>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </p>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <input type='text' placeholder='Email' />
        <InputWrap>
          <input type='text' placeholder='Password' />
          <LuEyeOff size={20} />
        </InputWrap>
        <SubmitFormBtn title='Log In' />
      </Form>
    </>
  );
};

export default LogInForm;
