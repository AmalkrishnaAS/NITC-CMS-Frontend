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
          size="sm"
          popup={true}
          onClose={
            ()=>setSelectedData(null)
          }
          className="h-screen "
        >
          <Modal.Header />
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
