import React from 'react'

const profile = ({user}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh]  -mt-6  sm:px-6 lg:px-8 ">
      <div className="pb-28 sm:pb-0 sm:pb-0  bg-gray-100 h-auto">

    <div className="container mx-auto my-5 p-5 pb-16">
        <div className="md:flex no-wrap md:-mx-2 ">
     
            <div className="w-full md:w-3/12 md:mx-2">
                {/* <!-- Profile Card --> */}
                <div className="bg-white p-3 border-t-4 border-blue-400">
                    <div className="image overflow-hidden h-52 w-52 mx-auto">
                        <img className=" mx-auto"
                            src={user?.avatar}
                            alt=""/>
                    </div>
                    <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">{user?.name}</h1>
                    <h3 className="text-gray-600 font-lg text-semibold leading-6 capitalize">{user?.role}</h3>
                
                  
                </div>
                {/* <!-- End of profile card --> */}
                <div className="my-4"></div>
               
            </div>
       
            <div className="w-full md:w-9/12 mx-2 h-64">
                {/*<!-- About Section --> */}
                <div className="bg-white p-3 shadow-sm rounded-sm">
                    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-blue-500">
                            {/* <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg> */}
                        </span>
                        <span className="tracking-wide">About</span>
                    </div>
                    <div className="text-gray-700">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold"> Name</div>
                                <div className="px-4 py-2">{user?.name}</div>
                            </div>
                          
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Faculty Advisor</div>
                                <div className="px-4 py-2">{user?.fa}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">9980010010</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Roll Number</div>
                                <div className="px-4 py-2">B200999CS</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Address</div>
                                <div className="px-4 py-2">221b Baker St, London, United Kingdom</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email.</div>
                                <div className="px-4 py-2">
                                    <a className="text-blue-700" href={`mailto:${user?.email}`}>{user?.email}</a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">Feb 06, 2000</div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4 uppercase tracking-wide text-blue-700">Logout</button>
                </div>
                {/* <!-- End of about section --> */}

                {/* <div className="my-4"></div> */}

            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default profile