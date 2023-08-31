import Modal from '../../ui/Modal';
import CreateRecordForm from './CreateRecordForm';

function AddRecord({ type = '' }) {
  return (
    <div>
      <Modal>
        <Modal.Open openWindow='create-record'>
          <button
            className={`button px-3 ${
              type === 'sidebar' ? 'mt-auto w-full' : 'float-right'
            }`}
          >
            Add Entry
          </button>
        </Modal.Open>
        <Modal.Window windowName='create-record'>
          <CreateRecordForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddRecord;
