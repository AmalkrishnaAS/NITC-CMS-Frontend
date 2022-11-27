import React from 'react'
import {Modal} from 'flowbite-react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import {
    Button
} from 'flowbite-react'
import axios from 'axios'

const DeleteModal = ({
    deleteId,
    setDeleteId,
    deleteComplaint
    
}) => {

 
   


  return (
    <React.Fragment >
  
  {<Modal
  
    show={deleteId!==null}
    className='h-screen'
    size="md"
    popup={true}
    onClose={
        ()=>{setDeleteId(null)}
    }
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this Entry?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            className='bg-red-500 hover:bg-red-600 focus:ring-red-500'
            onClick={
               deleteComplaint
            }
          >
            Yes, I'm sure
          </Button>
          <Button
            color="gray"
            onClick={
                () => {
                    setDeleteModal(false)
                }
            }
          >
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>}
</React.Fragment>

  )
}

export default DeleteModal