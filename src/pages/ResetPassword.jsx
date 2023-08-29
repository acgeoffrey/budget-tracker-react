import { useForm } from 'react-hook-form';
import { useResetPassword } from '../features/authentication/useResetPassword';
import { useParams } from 'react-router-dom';
import LoaderMini from '../ui/LoaderMini';
import FormElement from '../ui/FormElement';
import Logo from '../ui/Logo';

function ResetPassword() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { token } = useParams();
  // console.log(token);

  const { resetPassword, isLoading } = useResetPassword();

  function onSubmit(data) {
    resetPassword(
      { ...data, token },
      {
        onSettled: () => reset(),
      },
    );
  }
  return (
    <main className='grid min-h-screen grid-cols-[40%] content-center justify-center bg-gray-light'>
      <div className='mx-auto w-48'>
        <Logo />
      </div>
      <h2 className='mb-9 text-center text-2xl'>Reset Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormElement label='New Password' error={errors?.password?.message}>
          <input
            type='password'
            id='new-pass'
            className='input h-10 rounded px-3'
            placeholder='Min 8 characters'
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
          label='Confirm New Password'
          error={errors?.passwordConfirm?.message}
        >
          <input
            type='password'
            id='confirm-new-pass'
            className='input h-10 rounded px-3'
            placeholder='Repeat password'
            disabled={isLoading}
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || `Passwords doesn't match`,
            })}
          />
        </FormElement>
        <FormElement styles='flex justify-start items-center '>
          <button className='button mt-3 px-3 py-2' disabled={isLoading}>
            {isLoading ? <LoaderMini /> : 'Reset Password'}
          </button>
        </FormElement>
      </form>
    </main>
  );
}

export default ResetPassword;
