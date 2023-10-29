import React from "react";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
import CommentTable from './CommentTable'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CommentModal = ({ selectedData,setSelectedData, user,comments,getAvatar,item,handleChange1,handleChange2,remarks,handleSubmit1,handleSubmit2,comment }) => {


  
  
  // useEffect(() => {
  //   setLocalComments(comments);
  // }, [comments]);
  // const onClose = () => {
  //   setSelectedData(null)
  // };

  // const handleChange1 = (e) => {
   
  //   setRemarks(e.target.value);
  //   console.log(e.target.value);

  // };


  // const handleChange2 = (e) => {
  //   console.log(e.target.value);
  //   setComment(e.target.value);
  //   console.log(comment);
  // };

  // const handleSubmit1 = async (e) => {
  //   e.preventDefault();
  //   if(compalaints?.status==="Resolved"){
  //     toast.warn("Complaint is already resolved")
  //     return;
  //   }
  //   const res=axios.post('http://localhost:5000/resolve/'+item.id,{
  //     remarks:remarks,
  // },{
  //     headers:{
  //         'x-access-token':localStorage.getItem('token')
  //     }
  // })

  // console.log(res);
  //  setSelectedData(null)
  // };

  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //  //check if there is a comment with the same user email as the current user
  //  if(localComments.filter((comment) => comment.email === user.email).length>0){
  //   toast.error("You have already commented on this complaint")
  //   setComment("")
  //   return
  // }

  // setSelectedData(null)

  //   console.log("form submitted");
  //   const res=axios.post('http://localhost:5000/comment/'+item.id,{
  //     comment:comment,
  // },{
  //     headers:{
  //         'x-access-token':localStorage.getItem('token')
  //     }
  // })


  //   console.log("form submitted");
  //   const commentObj = comment;
  //   const userObj = {
  //     user: user.name,
  //     email: user.email,
  //     designation: user.designation,
  //   }
  //   const newComment = {
  //     comment: comment,
  //     ...userObj
  //   };
  //   setLocalComments([...localComments, newComment]);
  //   setComment("");
  // };

  // // comment state
  // const [comment, setComment] = useState("");
  // //remarks state
  // const [remarks, setRemarks] = useState("");

  
  return (
    <React.Fragment>
      {user && (
        <Modal
          show={selectedData!==null}
          size="lg"
          popup={true}
          onClose={
            ()=>setSelectedData(null)
          }
          className="h-screen"
        >
           <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Resolution Portal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                onClick={
                  ()=>setSelectedData(null)
                }
                >
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
          <Modal.Body className="bg-gray-100 ">
            
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {user.role === "committee head" ? "Resolve Issue" : "Comment"}
              </h3>
              <div>
              <div>
  {selectedData?.status==="Resolved"&&<div className="flex justify-center flex-col mt-3">
    
    <div className="mb-9">
      <Label className="mb-2">Remarks</Label>
      <TextInput
        className="w-full"
        placeholder="Remarks"
        value={selectedData?.remarks}
        disabled={true}
              />
    </div>
    </div>
    }
</div>
                <div className=" w-[90%]  shadow-md rounded-xl overflow-auto   mx-auto h-[280px] bg-white relative">
                    <h1
                    className=" py-3 
                    text-center text-xl font-medium text-gray-900 dark:text-white border-b-2 border-gray-200 sticky top-0 bg-white "
                    >
                        {user.role==="committee head" ? "Suggestions" : "Comments"}
                    </h1>
                    {user?.role!=='User'?<CommentTable
                    commentList={selectedData?.comments.filter((comment) => (comment.email === user.email || user.role === "committee head"))}
                    getAvatar={getAvatar}
                    />:
                    <div className="flex justify-center flex-col mt-3  text-wrap flex wrap p-3 ">
                      You are not authorized to view comments
                      </div>
                    }
                    


                
                            
                </div>
               {(user?.role==='committee head'|| user?.role==='section head')&&<div className=" flex mt-6 justify-center">
  
  <TextInput
    id="username3"
    placeholder={user?.role==='committee head'?"Remarks":"Comment"}
    className="w-[70%] "
    required={true}
    onChange={
      user?.role==='committee head'?handleChange1:handleChange2

    }
    value={
      user?.role==='committee head'?remarks:comment
    }
    
    
    shadow={true}

  />
    <Button
    className="w-[30%] ml-2 max-w-[100px]"
    onClick={
      user?.role==='committee head'?handleSubmit1:handleSubmit2
    }
    >
        {user.role==="committee head" ? "Resolve" : "Comment"}
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
