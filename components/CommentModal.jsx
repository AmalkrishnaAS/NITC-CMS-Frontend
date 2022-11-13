import React from "react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import CommentTable from './CommentTable'

const CommentModal = ({ commentModal, setCommentModal, user,comments,getAvatar }) => {
  const onClose = () => {
    setCommentModal(false);
  };

  

    

  return (
    <React.Fragment>
      {user && (
        <Modal
          show={commentModal}
          size="sm"
          popup={true}
          onClose={onClose}
          className="h-screen "
        >
          <Modal.Header />
          <Modal.Body className="bg-gray-100 ">
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {user.role === "admin" ? "Resolve Issue" : "Comment"}
              </h3>
              <div>
                <div className=" w-[90%]  shadow-md rounded-xl overflow-auto   mx-auto h-[280px] bg-white relative">
                    <h1
                    className=" py-3 
                    text-center text-xl font-medium text-gray-900 dark:text-white border-b-2 border-gray-200 sticky top-0 bg-white "
                    >
                        {user.role==="admin" ? "Suggestions" : "Comments"}
                    </h1>
                    <CommentTable
                    commentList={comments}
                    getAvatar={getAvatar}
                    />
                    


                
                            
                </div>
               {user.role==='admin'&&<div className=" flex mt-6 justify-center">
  
  <TextInput
    id="username3"
    placeholder="Enter your comment"
    className="w-[70%] "
    required={true}
    
    shadow={true}

  />
    <Button
    className="w-[30%] ml-2 max-w-[100px]"
    >
        {user.role==="admin" ? "Resolve" : "Comment"}
    </Button>
</div>}
              </div>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default CommentModal;
