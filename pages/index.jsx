
import Accordion from "../components/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Select from "react-select";
import { HiOutlineFilter } from "react-icons/hi";
import Title from "../components/Title";
import { useRouter } from "next/router";
import DeleteModal from "../components/DeleteModal";
import CommentModal from "../components/CommentModal";
import {toast} from 'react-toastify'

const Home = ({ user,logout}) => {

  const [localComments,setLocalComments]=useState([])

  //delete id state
  const [deleteId, setDeleteId] = useState(null);
  //state for selected data
  const [selectedData, setSelectedData] = useState(null);
  const router = useRouter();
  
  const [data, setData] = useState([]);
  const [AllData, setAllData] = useState([
   
  ]);
  const [compalaints,setComplaints]=useState(null)

  const deleteComplaint=async ()=>{
    console.log(`complaint ${deleteId} `)
  const  res=await axios.delete(`${process.env.NEXT_PUBLIC_SERVER}/complaint/${deleteId}`,
    {
        headers:{
            'x-access-token':localStorage.getItem('token')
        }
    }
    )
    console.log(res)

    //update local data after deleting
   
    setDeleteId(null)

}
const [comment, setComment] = useState("");
  //remarks state
  const [remarks, setRemarks] = useState("");


  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_SERVER}/complaints`,{
        headers:{
          'x-access-token':localStorage.getItem('token')
        }
      })
      .then((res) => {
        console.log(res.data.Complaints);
        setAllData(res.data.Complaints);
        setData(res.data.Complaints);
      })
      .catch((err) => console.log(err));


     const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }

  }, [selectedData,deleteId]);

  const options1 = [
    {
      label: "None",
      value: "all",
    },
    {
      label: "Maintainence",
      value: "Maintainence",
    },
    {
      label: "Academic",
      value: "Academic",
    },
    {
      label: "Hostel",
      value: "Hostel",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  const options2 = [
    {
      label: "None",
      value: "all",
    },
    {
      label: "Open",
      value: "Open",
    },
    {
      label: "Processing",
      value: "Processing",
    },
    {
      label: "Resolved",
      value: "Resolved",
    },
  ];
  const [open, setOpen] = useState(false);
  
  const [filter, setFilter] = useState({
    status: "all",
    type: "all",
  });
  //filter data based on filter object
  const ApplyFilter = () => {
    let tempData = AllData;
    if (filter.status !== "all") {
      tempData = tempData.filter((item) => item.status === filter.status);
    }
    if (filter.type !== "all") {
      tempData = tempData.filter((item) => item.type === filter.type);
    }
    return tempData;
  };
  const onSelect = (value, action) => {
    setFilter({
      ...filter,
      [action.name]: value.value,
    });
    console.log(filter);
    setData(ApplyFilter());

    //log the name attribute of the select element
  };

  const ClearFilters = () => {
    setFilter({
      status: "all",
      type: "all",
    });
    setData(AllData);
  };


 

  
  const onClose = () => {
    setSelectedData(null)
  };

  const handleChange1 = (e) => {
   
    setRemarks(e.target.value);
    console.log(e.target.value);

  };


  const handleChange2 = (e) => {
    console.log(e.target.value);
    setComment(e.target.value);
    console.log(comment);
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    if(selectedData?.status==="Resolved"){
      toast.warn("Complaint is already resolved")
      console.log(selectedData?.remarks)
      setRemarks("")
      return;
    }
    const res=axios.post(`${process.env.NEXT_PUBLIC_SERVER}/resolve/`+selectedData.id,{
      remarks:remarks,
  },{
      headers:{
          'x-access-token':localStorage.getItem('token')
      }
  })

  console.log(res);
  setRemarks("")
  setSelectedData(
    {
      ...selectedData,
      status:"Resolved",
      remarks:remarks
    }
  )

  //update ALLDATA
  setAllData(
    AllData.map((item)=>{
      if(item.id===selectedData.id){
        return {
          ...item,
          status:"Resolved",
          remarks:remarks
        }
      }
      return item
    }
    )
  )

  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
   //check if there is a comment with the same user email as the current user
   if(selectedData?.comments.filter((comment) => comment.email === user.email).length>0){
    toast.error("You have already commented on this complaint")
    setComment("")
    return
  }

  

  setSelectedData(null)

    console.log("form submitted");
    const res=axios.post(`${process.env.NEXT_PUBLIC_SERVER}/comment/`+selectedData.id,{
      comment:comment,
  },{
      headers:{
          'x-access-token':localStorage.getItem('token')
      }
  })


    console.log("form submitted");
    const commentObj = comment;
    const userObj = {
      user: user.name,
      email: user.email,
      designation: user.designation,
    }
    const newComment = {
      comment: comment,
      ...userObj
    };
    setSelectedData({
      ...selectedData,
      comments: [...selectedData.comments, newComment],
    })
    setComment("");
  };

  return (
    <>
    <DeleteModal
    deleteId={deleteId}
    setDeleteId={setDeleteId}
    deleteComplaint={deleteComplaint}

    
    ></DeleteModal>
    <CommentModal
    selectedData={selectedData}
    setSelectedData={setSelectedData}
    user={user}
    handleChange1={handleChange1}
    handleChange2={handleChange2}
    handleSubmit1={handleSubmit1}
    handleSubmit2={handleSubmit2}
    setComment={setComment}
    setRemarks={setRemarks}
    complaints={selectedData}
    comment={comment}
    remarks={remarks}
    ></CommentModal>
        {!(user?.role==='section head'&&user?.is_Authorized==false)?<div className="p-4 overflow-auto">
     

      <header className=" flex justify-between mx-auto sm:mx-6">
        <Title text="Complaints" count={ApplyFilter().length}></Title>
        <div></div>
        <div>
          <Button onClick={() => setOpen(!open)}>
            <HiOutlineFilter className="text-xl sm:mr-2  " />
            <span className="hidden sm:block">{open ? "Close" : "Filter"}</span>
          </Button>

          {open && (
            <div className="flex flex-col sm:w-64  shadow-md rounded-md absolute right-16 z-10 bg-white border-2 p-2 space-y-3">
              <Select
                name="type"
                placeholder={
                  filter.type === "all" ? "Filter by type" : filter.type
                }
                options={options1}
                onChange={onSelect}
                value={filter.type}
              ></Select>
              <Select
                placeholder={
                  filter.status === "all"
                    ? "Filter by Status..."
                    : filter.status
                }
                value={filter.status}
                name="status"
                onChange={onSelect}
                options={options2}
              ></Select>

              <div>
                <Button onClick={ClearFilters}>Clear </Button>
              </div>
            </div>
          )}
        </div>
      </header>
      <Accordion 
      setAllData={setAllData}
        data={ApplyFilter()}
        // setDeleteModal={setDeleteModal}
        // setCommentModal={setCommentModal}
        // commentModal={commentModal}
        // deleteModal={deleteModal}
        setDeleteId={setDeleteId}
        setSelectedData={setSelectedData}
        deleteId={deleteId}
        selectedData={selectedData}
        user={user}
        
      ></Accordion>
    </div>:
    <div
    className="w-screen h-screen flex justify-center "
    >
  <div className="flex justify-center items-center flex-col bg-gray-200 h-64 rounded-xl shadow-md border-2 border-blue-500 mt-6 mx-12 w-1/2">
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-lg my-3">You are not authorized to view complaints</h1>
      <Button onClick={logout}>Logout</Button>
    </div>
  </div>
    </div>
  
    
    }
    </>
  );
};

export default Home;
