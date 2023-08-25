import { useState } from 'react';

import { useRecords } from './useRecords';

import Table from '../../ui/Table';
import RecordsRow from './RecordsRow';

function RecordsTable() {
  const [query, setQuery] = useState('sort=-amount');
  const [page, setPage] = useState(1);
  const { records } = useRecords(query, page);
  const noDataNext = records?.length < 10;

  // console.log('Render ', page);

  function handlePage() {
    setPage((page) => page + 1);
  }

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
      <button onClick={handlePage} disabled={noDataNext}>
        next
      </button>
    </>
  );
}

export default RecordsTable;
