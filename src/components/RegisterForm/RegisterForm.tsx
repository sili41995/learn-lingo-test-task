import { FC, useEffect, useState } from 'react';
import {
  Description,
  Form,
  Input,
  InputWrap,
  InputsList,
  ShowPasswordBtn,
  Title,
} from './RegisterForm.styled';
import { INewUser } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toasts } from '@/utils';
import { Messages, regExp } from '@/constants';
import { LuEyeOff } from 'react-icons/lu';
import SubmitFormBtn from '../SubmitFormBtn';

const RegisterForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<INewUser>();
  const inputType = showPassword ? 'text' : 'password';

  useEffect(() => {
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordMinLengthErr
      );
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
    reset();
  };

  const onShowPasswordBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsList>
          <Input
            type='text'
            placeholder='Name'
            {...register('name', { required: true })}
          />
          <Input
            type='email'
            placeholder='Email'
            {...register('email', {
              required: true,
              pattern: regExp.emailRegEx,
            })}
          />
          <InputWrap>
            <Input
              {...register('password', { required: true, minLength: 6 })}
              type={inputType}
              placeholder='Password'
            />
            <ShowPasswordBtn onClick={onShowPasswordBtnClick} type='button'>
              <LuEyeOff size={20} />
            </ShowPasswordBtn>
          </InputWrap>
        </InputsList>
        <SubmitFormBtn title='Sign Up' />
      </Form>
    </>
  );
};

export default RegisterForm;
