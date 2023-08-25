import AddRecord from '../features/records/AddRecord';
import RecordTableOperations from '../features/records/RecordTableOperations';
import RecordsTable from '../features/records/RecordsTable';

function Records() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Financial Records</h1>
        <RecordTableOperations />
      </div>

      <div className='flex flex-col gap-5'>
        <RecordsTable />
        <AddRecord />
      </div>
    </>
  );
}

export default Records;
