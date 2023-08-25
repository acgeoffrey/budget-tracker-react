import Table from '../../ui/Table';
import { useUser } from '../authentication/useUser';
import { formatCurrency } from '../../utils/helpers';
import { DateTime } from 'luxon';
import ContextMenu from '../../ui/ContextMenu';
import { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';

function RecordsRow({ record }) {
  const [open, setOpen] = useState(false);
  const { id, title, recordType, category, date, amount } = record;
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
        <div className='relative outline-emerald-600'>
          <button className='outline-offset-4 outline-emerald-600'>
            <HiOutlineDotsVertical onClick={() => setOpen(!open)} />
          </button>
          <ContextMenu open={open}>
            <button className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'>
              <HiOutlinePencil className='text-gray-700' />
              <span>Edit</span>
            </button>
            <button className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'>
              <HiOutlineTrash className='text-gray-700' />
              <span>Delete</span>
            </button>
          </ContextMenu>
        </div>
      </div>
    </Table.Row>
  );
}

export default RecordsRow;
