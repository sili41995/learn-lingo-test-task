import { FC, useEffect } from 'react';
import { IProps } from './BookTrialLessonForm.types';
import {
  Avatar,
  Description,
  InfoWrap,
  Name,
  Subtitle,
  InfoTitle,
  TeacherInfo,
  Title,
  Reasons,
  Form,
  InputsList,
} from './BookTrialLessonForm.styled';
import { ITrialLessonData } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import RadioBtn from '@/components/RadioBtn';
import SubmitFormBtn from '@/components/SubmitFormBtn';
import Input from '../Input';
import { Messages, regExp } from '@/constants';
import { toasts } from '@/utils';

const BookTrialLessonForm: FC<IProps> = ({ teacher }) => {
  const defaultValues = { reason: 'Career and business' };
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
    watch,
  } = useForm<ITrialLessonData>({
    defaultValues,
  });
  const { avatar_url: avatarUrl, name, surname } = teacher;
  const fullName = `${name} ${surname}`;
  const reasonValue = watch('reason');

  useEffect(() => {
    errors.name && toasts.errorToast(Messages.nameReqErr);
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? Messages.emailReqErr
          : Messages.emailRegExpErr
      );
    errors.phone &&
      toasts.errorToast(
        errors.phone.type === 'required'
          ? Messages.phoneReqErr
          : Messages.phoneRegExpErr
      );
  }, [isSubmitting, errors]);

  const handleFormSubmit: SubmitHandler<ITrialLessonData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Title>Book trial lesson</Title>
      <Description>
        Our experienced tutor will assess your current language level, discuss
        your learning goals, and tailor the lesson to your specific needs.
      </Description>
      <TeacherInfo>
        <Avatar src={avatarUrl} alt={fullName} />
        <InfoWrap>
          <InfoTitle>Your teacher</InfoTitle>
          <Name>{fullName}</Name>
        </InfoWrap>
      </TeacherInfo>
      <Subtitle>What is your main reason for learning English?</Subtitle>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Reasons>
          <RadioBtn
            settings={{ ...register('reason', { required: true }) }}
            title='Career and business'
            currentValue={reasonValue}
          />
          <RadioBtn
            settings={{ ...register('reason', { required: true }) }}
            title='Lesson for kids'
            currentValue={reasonValue}
          />
          <RadioBtn
            settings={{ ...register('reason', { required: true }) }}
            title='Living abroad'
            currentValue={reasonValue}
          />
          <RadioBtn
            settings={{ ...register('reason', { required: true }) }}
            title='Exams and coursework'
            currentValue={reasonValue}
          />
          <RadioBtn
            settings={{ ...register('reason', { required: true }) }}
            title='Culture, travel or hobby'
            currentValue={reasonValue}
          />
        </Reasons>
        <InputsList>
          <Input
            settings={{ ...register('name', { required: true }) }}
            placeholder='Full Name'
            type='text'
          />
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
              ...register('phone', {
                required: true,
                pattern: regExp.phoneRegEx,
              }),
            }}
            placeholder='Phone number'
            type='text'
          />
        </InputsList>
        <SubmitFormBtn title='Book' />
      </Form>
    </>
  );
};

export default BookTrialLessonForm;
