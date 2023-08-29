import { useForm } from 'react-hook-form';
import FormElement from '../../ui/FormElement';
import { useSignup } from './useSignup';
import LoaderMini from '../../ui/LoaderMini';

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    signup(data, { onSettled: () => reset() });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='border-gray-light overflow-hidden rounded-xl border-[1px] border-solid bg-white px-10 py-6 text-base'
    >
      <FormElement label='Name' error={errors?.name?.message}>
        <input
          type='text'
          id='name'
          placeholder='Your Name'
          className='input'
          disabled={isLoading}
          {...register('name', { required: 'This field is required' })}
        />
      </FormElement>
      <FormElement label='Email' error={errors?.email?.message}>
        <input
          type='email'
          id='email'
          placeholder='user@email.com'
          className='input'
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
      </FormElement>
      <FormElement label='Password' error={errors?.password?.message}>
        <input
          type='password'
          id='password'
          placeholder='New Password (Min. 8 characters)'
          className='input'
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password must contain minimum of 8 characters',
            },
          })}
        />
      </FormElement>
      <FormElement
        label='Confirm Password'
        error={errors?.passwordConfirm?.message}
      >
        <input
          type='password'
          id='passwordConfirm'
          placeholder='Confirm New Password'
          className='input'
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || `Passwords doesn't match`,
          })}
        />
      </FormElement>
      <FormElement>
        <button className='button' disabled={isLoading}>
          {!isLoading ? 'Register' : <LoaderMini />}
        </button>
      </FormElement>
    </form>
  );
}

export default SignupForm;
