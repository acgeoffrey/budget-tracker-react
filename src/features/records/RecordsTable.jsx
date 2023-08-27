import { useRecords } from './useRecords';

import Table from '../../ui/Table';
import RecordsRow from './RecordsRow';
import Loader from '../../ui/Loader';
import Pagination from '../../ui/Pagination';

function RecordsTable({
  records,
  columns = 'grid-cols-[1.2fr_0.6fr_0.6fr_0.7fr_0.8fr_0.2fr]',
  type = 'main',
}) {
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
      <Table columns={columns}>
        <Table.Header>
          <div>Title</div>
          {type !== 'calendar' && <div>Type</div>}
          <div>Tag</div>
          <div>Amount</div>
          {type !== 'calendar' && <div>Date</div>}
          <div></div>
        </Table.Header>
        <Table.Body
          data={records}
          render={(record) => (
            <RecordsRow record={record} key={record.id} type={type} />
          )}
        />
        <Table.Footer>
          <Pagination count={records.length} />
        </Table.Footer>
      </Table>
    </>
  );
}

export default RecordsTable;
