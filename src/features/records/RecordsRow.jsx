import Table from '../../ui/Table';
import { useUser } from '../authentication/useUser';
import { formatCurrency } from '../../utils/helpers';
import { DateTime } from 'luxon';
import ContextMenu from '../../ui/ContextMenu';
import { useState } from 'react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import CreateRecordForm from './CreateRecordForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import { useDeleteRecord } from './useDeleteRecord';

function RecordsRow({ record }) {
  const [open, setOpen] = useState(false);
  const { isDeleting, deleteRecord } = useDeleteRecord();
  const { id, title, recordType, category, date, amount } = record;
  const { user } = useUser();
  const currency = user?.data?.settings[0]?.currency;

  function handleClose() {
    setOpen(!open);
  }

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
            <HiOutlineDotsVertical onClick={handleClose} />
          </button>

          <Modal>
            <ContextMenu open={open} handleClose={handleClose}>
              <Modal.Open openWindow='update-record'>
                <button
                  className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'
                  onBlur={handleClose}
                >
                  <HiOutlinePencil className='text-gray-700' />
                  <span>Edit</span>
                </button>
              </Modal.Open>

              <Modal.Open openWindow='delete-record'>
                <button
                  className='flex items-center justify-center gap-2 outline-offset-4 outline-emerald-600'
                  onClick={handleClose}
                >
                  <HiOutlineTrash className='text-gray-700' />
                  <span>Delete</span>
                </button>
              </Modal.Open>

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
            </ContextMenu>
          </Modal>
        </div>
      </div>
    </Table.Row>
  );
}

export default RecordsRow;
