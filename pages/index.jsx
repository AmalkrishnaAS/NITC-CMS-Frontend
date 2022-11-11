
import Head from 'next/head'
import Image from 'next/image'
import Accordion from '../components/Accordion'
import {useState} from 'react'
import DeleteModal from '../components/DeleteModal'
import {
  Button,

} from 'flowbite-react'
import Select from 'react-select'
import { HiOutlineFilter } from 'react-icons/hi'


const Home = ({}) => {
  const [deleteModal, setDeleteModal] = useState(false)
  const [AllData, setAllData] = useState([
    {
      title:'Broken water pipe',
      description:'The water pipe in the kitchen is broken and needs to be replaced',
      status:'Open',
      date:'2021-05-12',
      id:1,
      type:'Maintainance'
  },
  {
      title:'improperly installed door',
      description:'The door in the kitchen is not properly installed and needs to be fixed',
      status:'Closed',
      date:'2021-05-13',
      id:2,
      type:'Maintainance'
  },
  {
      title:'Hectic noise',
      description:'There is a hectic noise coming from the kitchen',
      status:'Open',
      date:'2021-05-12',
      id:3,
      type:'Other'
 
     }
      
  ])

  const options1=[
    {
      label:'None',
      value:'all'
    },
    {
      label:'Maintainance',
      value:'Maintainance'
    },
    {
      label:'Academic',
      value:'Academic'
    },
    {
      label:'Hostels',
      value:'Hostels'
    },
    {
      label:'Other',
      value:'Other'
    }
  ]
  const options2=[
    {
      label:'None',
      value:'all'
    },
    {
      label:'Open',
      value:'Open'
    },
    {
      label:'Closed',
      value:'Closed'
    }
  ]
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState({
    status: 'all',
    type: 'all',
  })
 //filter data based on filter object
 const ApplyFilter=()=>{
  let tempData=AllData
  if(filter.status!=='all'){
    tempData=tempData.filter((item)=>item.status===filter.status)
  }
  if(filter.type!=='all'){
    tempData=tempData.filter((item)=>item.type===filter.type)
  }
  return tempData

  
  
 }
  const onSelect=(value,action)=>{
  setFilter({
    ...filter,
    [action.name]:value.value
  })
  console.log(filter)
  setData(ApplyFilter())

    //log the name attribute of the select element
   
  

  }
  const [data, setData] = useState([
    {
     title:'Broken water pipe',
     description:'The water pipe in the kitchen is broken and needs to be replaced',
     status:'Open',
     date:'2021-05-12',
     id:1,
     type:'Maintainance'
 },
 {
     title:'improperly installed door',
     description:'The door in the kitchen is not properly installed and needs to be fixed',
     status:'Closed',
     date:'2021-05-13',
     id:2,
     type:'Maintainance'
 },
 {
     title:'Hectic noise',
     description:'There is a hectic noise coming from the kitchen',
     status:'Open',
     date:'2021-05-12',
     id:3,
     type:'Other'

    }
 ])

 const ClearFilters=()=>{
    setFilter({
      status:'all',
      type:'all'
    })
    setData(AllData)
 }
  return (
    
  
<div className="p-4 overflow-auto">
  <DeleteModal
  deleteModal={deleteModal}
  setDeleteModal={setDeleteModal}
  ></DeleteModal>
 <header className=' flex justify-between mx-auto sm:mx-6'>
    <h1 className="text-4xl font-semibold text-center text-gray-700 mb-6 text-3xl flex justify-center items-center ">Complaints <span className='bg-blue-700 text-white text-sm block w-8 h-8 flex justify-center items-center  rounded-full mt-1 ml-3'>
    {ApplyFilter().length} </span></h1>
    <div>

    </div>
    <div>
      <Button
      onClick={()=>setOpen(!open)}
      >
        <HiOutlineFilter className='text-xl sm:mr-2  '/>
        <span className='hidden sm:block'>
        {
          open?'Close':'Filter' 
        }
        </span>
       
        
      </Button>
      
   {open&& <div className='flex flex-col sm:w-64  shadow-md rounded-md absolute right-16 z-10 bg-white border-2 p-2 space-y-3'>
    <Select
    name='type'
    
    placeholder={filter.type==='all'?'Filter by type':filter.type}
    
    options={options1} onChange={
      onSelect
    }
    value={filter.type}
    >

    </Select>
    <Select placeholder={filter.status==='all'?'Filter by Status...':filter.status} 
    value={filter.status}
    name='status' 
    onChange={onSelect}
    
    options={options2}>
      </Select>

    
      <div>
        <Button onClick={ClearFilters} >Clear </Button>
      </div>
    </div>}
    </div>
 </header>
<Accordion data={ApplyFilter()}
setDeleteModal={setDeleteModal}
></Accordion>
</div>
  )
}

export default Home
