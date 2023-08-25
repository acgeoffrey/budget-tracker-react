import { useSearchParams } from 'react-router-dom';

import { useRecords } from './useRecords';

import Table from '../../ui/Table';
import RecordsRow from './RecordsRow';
import Loader from '../../ui/Loader';

function RecordsTable() {
  const [searchParams] = useSearchParams();

  let query = 'sort=-amount';
  for (const entry of searchParams.entries()) {
    if (entry[0] === 'recordType' && entry[1] === 'all') continue;

    query += '&';
    query += entry.toString().replace(',', '=');
  }

  const { isLoading, records } = useRecords(query, 1);
  if (isLoading) return <Loader />;

  console.log(query);

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
      </Table>
    </>
  );
}

export default RecordsTable;
