import { useRecords } from './useRecords';

import Table from '../../ui/Table';
import RecordsRow from './RecordsRow';
import Loader from '../../ui/Loader';
import Pagination from '../../ui/Pagination';

function RecordsTable() {
  const { isLoading, records } = useRecords();
  if (isLoading) return <Loader />;

  // const filterValue = searchParams.get('recordType') || 'expense';

  // let filteredRecords;
  // if (filterValue === 'all') filteredRecords = records;
  // if (filterValue === 'expense')
  //   filteredRecords = records.filter(
  //     (record) => record.recordType !== 'income',
  //   );
  // if (filterValue === 'income')
  //   filteredRecords = records.filter(
  //     (record) => record.recordType !== 'expense',
  //   );

  return (
    <>
      <Table columns='grid-cols-[1.2fr_0.6fr_0.6fr_0.7fr_0.8fr_0.2fr]'>
        <Table.Header>
          <div>Title</div>
          <div>Type</div>
          <div>Tag</div>
          <div>Amount</div>
          <div>Date</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={records}
          render={(record) => <RecordsRow record={record} key={record.id} />}
        />
        <Table.Footer>
          <Pagination count={records.length} />
        </Table.Footer>
      </Table>
    </>
  );
}

export default RecordsTable;
