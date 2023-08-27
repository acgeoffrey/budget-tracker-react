import { useForm } from 'react-hook-form';
import FormElementRow from '../../ui/FormElementRow';
import { useUpdatePassword } from './useUpdatePassword';
import LoaderMini from '../../ui/LoaderMini';

function UpdatePassForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { updatePassword, isLoading } = useUpdatePassword();

  function onSubmit(data) {
    updatePassword(data, {
      onSettled: () => reset(),
    });
  }

  return (
    <>
      <h2 className='border-b border-gray-300 pb-3 text-xl font-medium'>
        Change Password
      </h2>
      <form
        className='flex w-[70%] flex-col gap-2 py-5'
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormElementRow
          label='Current Password'
          styles='grid grid-cols-[1fr_1fr_1fr] gap-5 items-center'
          error={errors?.passwordCurrent?.message}
        >
          <input
            type='password'
            id='current-pass'
            className='input h-10 rounded px-3'
            disabled={isLoading}
            {...register('passwordCurrent', {
              required: 'Enter your current password',
            })}
          />
        </FormElementRow>
        <FormElementRow
          label='New Password'
          styles='grid grid-cols-[1fr_1fr_1fr] gap-5 items-center'
          error={errors?.password?.message}
        >
          <input
            type='password'
            id='new-pass'
            className='input h-10 rounded px-3'
            disabled={isLoading}
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'Password must contain minimum of 8 characters',
              },
            })}
          />
        </FormElementRow>
        <FormElementRow
          label='Confirm New Password'
          styles='grid grid-cols-[1fr_1fr_1fr] gap-5 items-center'
          error={errors?.passwordConfirm?.message}
        >
          <input
            type='password'
            id='confirm-new-pass'
            className='input h-10 rounded px-3'
            disabled={isLoading}
            {...register('passwordConfirm', {
              required: 'This field is required',
              validate: (value) =>
                value === getValues().password || `Passwords doesn't match`,
            })}
          />
        </FormElementRow>
        <FormElementRow styles='flex justify-start items-center '>
          <button className='button mt-3 px-3 py-2' disabled={isLoading}>
            {isLoading ? <LoaderMini /> : 'Update Password'}
          </button>
        </FormElementRow>
      </form>
    </>
  );
}

export default UpdatePassForm;
