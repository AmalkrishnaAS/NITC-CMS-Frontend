
import Accordion from "../components/Accordion";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "flowbite-react";
import Select from "react-select";
import { HiOutlineFilter } from "react-icons/hi";
import Title from "../components/Title";
import { useRouter } from "next/router";

const Home = ({ user}) => {
  const router = useRouter();
  const [deleteModal, setDeleteModal] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [AllData, setAllData] = useState([
   
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/complaints")
      .then((res) => {
        console.log(res.data);
        setAllData(res.data);
      })
      .catch((err) => console.log(err));


      if(!user){
        router.push('/login')
      }
  }, []);

  const options1 = [
    {
      label: "None",
      value: "all",
    },
    {
      label: "Maintainance",
      value: "Maintainance",
    },
    {
      label: "Academic",
      value: "Academic",
    },
    {
      label: "Hostels",
      value: "Hostels",
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
      label: "Closed",
      value: "Closed",
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
  return (
    <div className="p-4 overflow-auto">
     

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
        data={ApplyFilter()}
        setDeleteModal={setDeleteModal}
        setCommentModal={setCommentModal}
        commentModal={commentModal}
        deleteModal={deleteModal}
        user={user}
      ></Accordion>
    </div>
  );
};

export default Home;
