import { ICredentials } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LuEyeOff } from 'react-icons/lu';
import {
  Description,
  Form,
  InputsList,
  ShowPasswordBtn,
  Title,
} from './LogInForm.styled';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import { Messages, regExp } from '@/constants';
import { toasts } from '@/utils';
import Input from '@/components/Input';

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
            settings={{
              ...register('email', {
                required: true,
                pattern: regExp.emailRegEx,
              }),
            }}
            placeholder='Email'
            type='email'
          />
          <Input
            settings={{
              ...register('password', { required: true, minLength: 6 }),
            }}
            placeholder='Password'
            type={inputType}
            btn={
              <ShowPasswordBtn onClick={onShowPasswordBtnClick} type='button'>
                <LuEyeOff size={20} />
              </ShowPasswordBtn>
            }
          />
        </InputsList>
        <SubmitFormBtn title='Log In' />
      </Form>
    </>
  );
};

export default LogInForm;
