import AddRecord from '../features/records/AddRecord';
import RecordTableOperations from '../features/records/RecordTableOperations';
import RecordsTable from '../features/records/RecordsTable';
import { useRecords } from '../features/records/useRecords';
import Loader from '../ui/Loader';

function Records() {
  const { isLoading, records } = useRecords();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Financial Records</h1>
        <RecordTableOperations />
      </div>

      <div className='flex flex-col gap-5'>
        <RecordsTable records={records} />
        <AddRecord />
      </div>
    </>
  );
}

export default Records;
