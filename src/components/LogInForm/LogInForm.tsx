import { ICredentials } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuEyeOff } from 'react-icons/lu';
import {
  Description,
  Form,
  Input,
  InputWrap,
  InputsList,
  ShowPasswordBtn,
  Title,
} from './LogInForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { Messages, regExp } from '@/constants';
import { toasts } from '@/utils';

const LogInForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ICredentials>();
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

  const handleFormSubmit: SubmitHandler<ICredentials> = (data) => {
    console.log(data);
    reset();
  };

  const onShowPasswordBtnClick = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <InputsList>
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
        <SubmitFormBtn title='Log In' />
      </Form>
    </>
  );
};

export default LogInForm;
