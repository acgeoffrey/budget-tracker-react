import Table from '../../ui/Table';
import CreateRecordForm from './CreateRecordForm';
import RecordsRow from './RecordsRow';
import { useRecords } from './useRecords';

function RecordsTable() {
  const { isLoading, records } = useRecords();

  return (
    <>
      <Table columns='grid-cols-[1.4fr_0.6fr_0.6fr_0.8fr_0.8fr_0.2fr]'>
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
