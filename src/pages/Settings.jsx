import UpdatePassForm from '../features/authentication/UpdatePassForm';
import UpdateSettings from '../features/authentication/UpdateSettings';

function Settings() {
  return (
    <>
      <div className=''>
        <UpdatePassForm />
        <UpdateSettings />
      </div>
    </>
  );
}

export default Settings;
