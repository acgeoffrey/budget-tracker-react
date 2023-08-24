import Table from '../../ui/Table';

function RecordsTable() {
  return (
    <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
      <Table.Header>
        <div></div>
        <div>Title</div>
        <div>Type</div>
        <div>Tag</div>
        <div>Amount</div>
        <div>Date</div>
      </Table.Header>
    </Table>
  );
}

export default RecordsTable;
