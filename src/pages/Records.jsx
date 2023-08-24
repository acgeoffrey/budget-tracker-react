import RecordsTable from '../features/records/RecordsTable';
import Table from '../ui/Table';

function Records() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Financial Records</h1>
      </div>

      <div className='flex flex-col gap-5'>
        <RecordsTable />
      </div>
    </>
  );
}

export default Records;
