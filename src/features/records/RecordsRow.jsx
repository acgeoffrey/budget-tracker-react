import { useState } from 'react';
import { DateTime } from 'luxon';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { HiOutlineDotsVertical } from 'react-icons/hi';
// import { useDispatch, useSelector } from 'react-redux';

import { useUser } from '../authentication/useUser';
import { formatCurrency } from '../../utils/helpers';
import { useDeleteRecord } from './useDeleteRecord';
// import { viewContextMenu } from './recordSlice';

import Table from '../../ui/Table';
import Modal from '../../ui/Modal';
import ContextMenu from '../../ui/ContextMenu';
import CreateRecordForm from './CreateRecordForm';
import ConfirmDelete from '../../ui/ConfirmDelete';

function RecordsRow({ record }) {
  // const dispatch = useDispatch();
  // const open = useSelector((store) => store.records.currentContextWindow);
  const [open, setOpen] = useState(false);

  const { isDeleting, deleteRecord } = useDeleteRecord();
  const { id, title, recordType, category, date, amount } = record;
  const { user } = useUser();
  const currency = user?.data?.settings[0]?.currency;

  function handleOpen() {
    // if (id === open) dispatch(viewContextMenu(''));
    // dispatch(viewContextMenu(id));
    setOpen(!open);
  }

  return (
    <Table.Row>
      <div className='font-medium capitalize text-gray-600'>{title}</div>
      <div
        className={`w-24 rounded-2xl text-center text-sm uppercase tracking-wide ${
          recordType === 'expense'
            ? 'bg-sky-200 text-sky-700'
            : 'bg-yellow-200 text-yellow-700'
        }`}
      >
        {recordType}
      </div>
      <div className='capitalize'>{category}</div>
      <div className='font-number font-semibold'>
        {formatCurrency(currency, amount)}
      </div>
      <div>{DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)}</div>

      <div>
        <div className='relative outline-emerald-600'>
          <button className='outline-offset-4 outline-emerald-600'>
            <HiOutlineDotsVertical onClick={handleOpen} />
          </button>

          <Modal>
            <ContextMenu open={open} handleClose={() => setOpen(false)}>
              <Modal.Open openWindow='update-record'>
                <button className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'>
                  <HiOutlinePencil className=' text-blue-700' />
                  <span>Edit</span>
                </button>
              </Modal.Open>

              <Modal.Open openWindow='delete-record'>
                <button className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'>
                  <HiOutlineTrash className='text-red-700' />
                  <span>Delete</span>
                </button>
              </Modal.Open>
            </ContextMenu>

            <Modal.Window windowName='update-record'>
              <CreateRecordForm updateForm={record} />
            </Modal.Window>

            <Modal.Window windowName='delete-record'>
              <ConfirmDelete
                name='record'
                disabled={isDeleting}
                onConfirm={() => deleteRecord(id)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </div>
    </Table.Row>
  );
}

export default RecordsRow;
