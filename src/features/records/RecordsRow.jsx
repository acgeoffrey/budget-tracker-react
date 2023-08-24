import Table from '../../ui/Table';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useUser } from '../authentication/useUser';
import { formatCurrency } from '../../utils/helpers';
import { DateTime } from 'luxon';

function RecordsRow({ record }) {
  const { id, title, recordType, category, date, description, amount } = record;
  const { user, isLoading } = useUser();
  const currency = user?.data?.settings[0]?.currency;

  return (
    <Table.Row>
      <div className='font-medium capitalize text-gray-600'>{title}</div>
      <div className='capitalize'>{recordType}</div>
      <div className='capitalize'>{category}</div>
      <div className='font-number font-semibold'>
        {formatCurrency(currency, amount)}
      </div>
      <div>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}</div>
      <div>
        <HiOutlineDotsVertical />
      </div>
    </Table.Row>
  );
}

export default RecordsRow;
